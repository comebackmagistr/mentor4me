import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authStudentReducer = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setAuthStudent(state, action) {
      return action.payload;
    },
  },
});

export const { setAuthStudent, logoutUser } = authStudentReducer.actions;
export default authStudentReducer.reducer;

export const signupMentor = (inputs) => (dispatch) => {
  axios.post('http://localhost:3001/api/student/signup', inputs)
    .then((res) => dispatch(setAuthStudent(res.data)))
    .catch(console.log);
};
