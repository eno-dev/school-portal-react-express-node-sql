import { apiSlice } from "../../api/apiSlice"

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTeachers: builder.query({
            query: () => '/api/users/teachers/',
            keepUnusedDataFor: 3,
        })
    })
})

export const {
    useGetTeachersQuery
} = usersApiSlice 