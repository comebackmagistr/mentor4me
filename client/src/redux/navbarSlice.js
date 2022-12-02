import { createSlice } from '@reduxjs/toolkit';

export const setNavbarSlice = createSlice({
  name: 'navbar',
  initialState: 'mainpage',
  reducers: {
    setNavbar: (state, action) => action.payload,
  },
});

export const { setNavbar } = setNavbarSlice.actions;

const getNavBarParam = (text) => (dispatch) => {
  console.log(text);
  dispatch(setNavbar(text));
};

export default setNavbarSlice.reducer;

export { getNavBarParam };
