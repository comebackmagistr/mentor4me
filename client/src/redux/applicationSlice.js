import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const applicationSlice = createSlice({
  name: 'application',
  initialState: [],
  reducers: {
    setSearch: (state, action) => action.payload,
    setApplication: (state, action) => action.payload,
  },
});

export const { setApplication } = applicationSlice.actions;

const getApplication = (input, id) => async (dispatch) => {
  const res = await axios.post(`/applications/${id}`, input, id);
  dispatch(setApplication(res.data));
};

export default applicationSlice.reducer;

export { getApplication };
