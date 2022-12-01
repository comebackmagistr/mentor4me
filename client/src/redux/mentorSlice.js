import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const mentorSlice = createSlice({
  name: 'mentor',
  initialState: [],
  reducers: {
    setMentor: (state, action) => action.payload,
    updateMentor: (state, action) => state.map((mentor) => (mentor.id === action.payload.id ? action.payload : mentor)),
  },
});

// export const { setMentor, updateMentor } = mentorSlice.actions;
export const { setMentor } = mentorSlice.actions;

const showMentor = () => (dispatch) => {
  axios('http://localhost:3001/api/mentorprofile')
    .then((res) => dispatch(setMentor(res.data)));
};

// const editMentor = (id, input) => (dispatch) => {
//   axios.patch(`/http://localhost:3001/api/mentorprofile/${id}`, { text: input }) // что должно быть в кудрях?
//     .then((res) => dispatch(updateMentor(res.data)))
//     .catch(console.log);
// };

export default mentorSlice.reducer;

// export { showMentor, editMentor };
export { showMentor };
