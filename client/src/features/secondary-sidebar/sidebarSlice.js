import { createSlice } from '@reduxjs/toolkit';
// Initial state of toggle
const initialState = {
  user: {},
};
// Create the slice
export const sidebarSlice = createSlice({
  // name of slice
  name: 'sidebar',
  // grabs initial state from above
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserInfo } = sidebarSlice.actions;

export default sidebarSlice.reducer;

export const selectedUser = state => state.sidebar.user;
