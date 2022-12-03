import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const studentSlice = createSlice({
  name: 'student',
  initialState: [],
  reducers: {
    setStudent: (state, action) => action.payload,
    updateStudent: (state, action) => state.map((student) => (student.id === action.payload.id ? action.payload : student)),
  },
});

export const { setStudent, updateStudent } = studentSlice.actions;

const showStudent = () => (dispatch) => {
  axios('/api/student/studentprofile')
    .then((res) => dispatch(setStudent(res.data)));
};

const editStudent = (input) => (dispatch) => {
  axios.patch('/api/student/studentprofile', input)
    .then((res) => dispatch(updateStudent(res.data)))
    .catch(console.log);
};

export default studentSlice.reducer;

export { showStudent, editStudent };
