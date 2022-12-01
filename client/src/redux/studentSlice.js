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

// export const { setStudent, updateStudent } = studentSlice.actions;
export const { setStudent } = studentSlice.actions;

const showStudent = () => (dispatch) => {
  axios('http://localhost:3001/api/studentprofile')
    .then((res) => dispatch(setStudent(res.data)));
};

// const editStudent = (id, input) => (dispatch) => {
//   axios.patch(`/http://localhost:3001/api/studentprofile/${id}`, { text: input }) // что должно быть в кудрях?
//     .then((res) => dispatch(updateStudent(res.data)))
//     .catch(console.log);
// };

export default studentSlice.reducer;

// export { showStudent, editStudent };
export { showStudent };
