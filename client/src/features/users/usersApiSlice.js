import { apiSlice } from "../../api/apiSlice"

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUser: builder.query({
            query: () =>
            ({
                url: '/api/users/role/1',
                method: 'POST',
                body: { "role_id": 1 },
                keepUnusedDataFor: 3
            })
        }),
        getUserByRole: builder.query({
            query: id =>
            ({
                url: `/api/users/role/${id}`,
                method: 'POST',
                body: { "role_id": id },
                keepUnusedDataFor: 3
            })
        }),
        getUserById: builder.query({
            query: id =>
            ({
                url: `/api/users/role/${id}`,
                method: 'POST',
                body: { "role_id": id },
                keepUnusedDataFor: 3
            })
        }),
        updateUser: builder.query({
            query: () =>
            ({
                url: '/api/users/role/1',
                method: 'POST',
                body: { "role_id": 1 },
                keepUnusedDataFor: 3
            })
        }),
        deleteUser: builder.query({
            query: ({ id }) =>
            ({
                url: `/api/users/delete/${id}`,
                method: 'DELETE',
                body: { "user_id": id }
            })
        })
    })
})

// export const userSlice = createSlice({
//     name: 'users',
//     initialState,
//     reducers: {
//         addUser: (state, action) => {

//         },

//         get: (state, action) => {

//         },

//         getById: (state, action) => {

//         },

//         delete: (state, action) => {

//         },

//         update: (state, action) => {

//         }
//     }
// })

export const {
    useGetUserByIdQuery,
    useGetUserByRoleQuery,
    useGetTeachersQuery,
    useDeleteUserQuery
} = usersApiSlice
