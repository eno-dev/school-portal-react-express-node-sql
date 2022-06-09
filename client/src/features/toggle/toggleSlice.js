import { createSlice } from '@reduxjs/toolkit'
// Initial state of toggle
const initialState = {
    active: false,
}

// Create the slice
export const toggleSlice = createSlice({
    // name of slice
    name: 'toggle',
    // grabs initial state from above
    initialState,
    reducers: {
        toggleOn: (state) => {
            state.active = true;
        },
        toggleOff: (state) => {
            state.active = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleOn, toggleOff } = toggleSlice.actions

export default toggleSlice.reducer