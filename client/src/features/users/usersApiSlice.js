import { apiSlice } from "../../api/apiSlice"

export const usersApiSlice = apiSlice.injectEndpoints({
    // tagTypes sets Tags
    tagTypes: ['Users'],
    endpoints: builder => ({
        getUser: builder.query({
            query: () =>
            ({
                url: '/users/role/1',
                method: 'POST',
                body: { "role_id": 1 },
                keepUnusedDataFor: 10
            })
        }),

        getUserByRole: builder.query({
            query: id =>
            ({
                url: `/users/role/${id}`,
                method: 'POST',
                body: { "role_id": id },
                keepUnusedDataFor: 3
            }),
            // Stores the tag stated to the query
            providesTags: ['Users']
        }),

        getUserById: builder.query({
            query: () =>
            ({
                url: `/users/`,
                method: 'POST',
                body: { "user_id": 1 },
                keepUnusedDataFor: 3
            })
        }),

        updateUser: builder.query({
            query: () =>
            ({
                url: '/users/role/1',
                method: 'POST',
                body: { "role_id": 1 },
                keepUnusedDataFor: 3
            })
        }),

        deleteUser: builder.mutation({
            query: ({ id }) =>
            ({
                url: `/users/delete/${id}`,
                method: 'DELETE',
                body: { "user_id": id }
            }),
            // It invalidates the tag with the same name
            invalidatesTags: ['Users']
        })
    })
})

export const {
    useGetUserByIdQuery,
    useGetUserByRoleQuery,
    useGetTeachersQuery,
    useDeleteUserMutation
} = usersApiSlice
