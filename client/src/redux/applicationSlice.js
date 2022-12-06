import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const applicationSlice = createSlice({
  name: 'application',
  initialState: [],
  reducers: {
    setSearch: (state, action) => action.payload,
  },
});

export const { setApplication } = applicationSlice.actions;

const getApplication = (input, id) => async (dispatch) => {
  const res = await axios.post(`/applications/${id}`, input, id);
  dispatch(setApplication(res.data));
};

const axiosApplication = () => (dispatch) => {
  axios.get('/applications/applicationformentor')
    .then((res) => dispatch(setApplication(res.data)))
    .catch(() => dispatch(setApplication({})));
};

export default applicationSlice.reducer;

export { getApplication, axiosApplication };
