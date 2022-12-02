import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authStudentSlice = createSlice({
  name: 'student',
  initialState: {},
  reducers: {
    setAuthStudent(state, action) {
      return action.payload;
    },
    logoutStudent(state, action) {
      return {};
    },
  },
});

export const { setAuthStudent, logoutStudent } = authStudentSlice.actions;

export const signupStudent = (inputs) => (dispatch) => {
  axios.post('/signup2', inputs)
    .then((res) => dispatch(setAuthStudent(res.data)))
    .catch(console.log);
};
export default authStudentSlice.reducer;
