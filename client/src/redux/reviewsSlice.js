import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const reviewsSlice = createSlice({
  name: 'Reviews',
  initialState: [],
  reducers: {
    setReviews: (state, action) => action.payload,
  },
});
export const { setReviews } = reviewsSlice.actions;

export const showReviews = (id) => (dispatch) => {
  axios(`/reviews/${id}`)
    .then((res) => dispatch(setReviews(res.data)));
};

export default reviewsSlice.reducer;
