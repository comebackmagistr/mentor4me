import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authMentorSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setAuthMentor(state, action) {
      return action.payload;
    },
    logoutUser() {
      return {};
    },
  },
});

export const { setAuthMentor, logoutUser } = authMentorSlice.actions;
export default authMentorSlice.reducer;

export const signupMentor = (inputs) => (dispatch) => {
  axios.post('http://localhost:3001/api/mentor/signup', inputs)
    .then((res) => dispatch(setAuthMentor(res.data)))
    .catch(console.log);
};

// export const loginMentor = (e, inputs) => (dispatch) => {
//   e.preventDefault();
//   axios.post('http://localhost:3001/api/mentor/login', inputs, { withCredentials: true })
//     .then((res) => dispatch(setAuthMentor(res.data)))
//     .catch(console.log);
// };
