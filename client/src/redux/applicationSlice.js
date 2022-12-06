import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const applicationSlice = createSlice({
  name: 'application',
  initialState: [],
  reducers: {
    setSearch: (state, action) => action.payload,
  },
});

export const { setApplication, setSearch } = applicationSlice.actions;

const getApplication = (input, id) => async (dispatch) => {
  const res = await axios.post(`/applications/${id}`, input, id);
  dispatch(setApplication(res.data));
};

const axiosApplication = () => (dispatch) => {
  axios.get('/applications/applicationformentor')
    .then((res) => dispatch(setSearch(res.data)))
    .catch(() => dispatch(setSearch({})));
};

export default applicationSlice.reducer;

export { getApplication, axiosApplication };
