import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useSelector } from 'react-redux'
import { setCredentials, logOut, selectRefreshToken } from '../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const accessToken = getState().auth.accessToken
        const refreshToken = getState().auth.refreshToken
        if (accessToken) {
            headers.set("authorization", `Bearer ${accessToken}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.originalStatus === 403) {
        console.log('sending refresh token')
        const refreshToken = api.getState().auth.refreshToken
        const refreshWtoken = { "token": `${refreshToken}` }
        console.log(refreshWtoken)
        // send refresh token to get new access token 
        const refreshResult = await baseQuery({
            url: '/api/refresh',
            method: 'POST',
            body: {
                "token": `${refreshToken}`
            }
        }, api, extraOptions)

        console.log(`This is the current refresh token ${refreshToken}`)
        // console.log(`This is the refresh result ACCESS ${JSON.stringify(...refreshResult.data)}`)
        // console.log(`This is the refresh result REFRESH ${JSON.stringify(...refreshResult.data.accessToken)}`)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            // const refreshRes = JSON.stringify(...refreshResult.data)
            console.log(refreshResult.data);

            // store the new token 
            api.dispatch(setCredentials({ ...refreshResult.data, user }))
            // retry the original query with new access token 
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }

    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})