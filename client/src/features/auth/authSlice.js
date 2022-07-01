import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        accessToken: null,
        refreshToken: null,
        isLoggedIn: false
    },
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken, refreshToken, isLoggedIn } = action.payload
            state.user = user
            state.accessToken = accessToken
            state.refreshToken = refreshToken
            state.isLoggedIn = isLoggedIn
        },
        logOut: (state, action) => {
            state.user = null
            state.accessToken = null
            state.refreshToken = null
            state.isLoggedIn = false

        },
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth.accessToken
export const selectRefreshToken = (state) => state.auth.refreshToken
export const selectLoggedInState = (state) => state.auth.isLoggedIn