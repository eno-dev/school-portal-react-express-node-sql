import { createSlice } from '@reduxjs/toolkit'
// Initial state of toggle
const initialState = {
    user: {}
}

// Create the slice
export const sidebarSlice = createSlice({
    // name of slice
    name: 'sidebar',
    // grabs initial state from above
    initialState,
    reducers: {
        setUserId: (state, action) => {
            const { user_id } = action.payload
            state.user_id = user_id
        },
        setSidebarInfo: (state, action) => {
            const { user } = action.payload
            state.user = user
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUserId, setSidebarInfo } = sidebarSlice.actions

export default sidebarSlice.reducer

export const selectedUserId = (state) => state.sidebar.user_id
export const selectedUser = (state) => state.sidebar.user