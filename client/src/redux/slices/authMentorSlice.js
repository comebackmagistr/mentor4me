import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authMentorSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setAuthMentor: (state, action) => action.payload,
    logoutUser() {
      return {};
    },
  },
});

export const { setAuthMentor, logoutUser } = authMentorSlice.actions;

const signupMentor = (inputs) => (dispatch) => {
  console.log(inputs);
  axios.post('/signup1', inputs)
    .then((res) => dispatch(setAuthMentor(res.data)))
    .catch(console.log);
};

export default authMentorSlice.reducer;

export { signupMentor };
// export const loginMentor = (e, inputs) => (dispatch) => {
//   e.preventDefault();
//   axios.post('http://localhost:3001/api/mentor/login', inputs, { withCredentials: true })
//     .then((res) => dispatch(setAuthMentor(res.data)))
//     .catch(console.log);
// };
