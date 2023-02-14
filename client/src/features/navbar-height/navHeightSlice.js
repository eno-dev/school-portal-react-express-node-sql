import { createSlice } from '@reduxjs/toolkit';
// Initial state of toggle
const initialState = {
  height: null,
};

// Create the slice
export const navHeightSlice = createSlice({
  // name of slice
  name: 'navHeight',
  // grabs initial state from above
  initialState,
  reducers: {
    setNavHeight: (state, action) => {
      const { height } = action.payload;
      state.height = height;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNavHeight } = navHeightSlice.actions;

export default navHeightSlice.reducer;

export const selectNavHeight = state => state.navHeight.height;
