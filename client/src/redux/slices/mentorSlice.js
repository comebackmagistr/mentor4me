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

export const { setMentor, updateMentor } = mentorSlice.actions;

const showMentor = () => (dispatch) => {
  axios('/mentorprofile')
    .then((res) => dispatch(setMentor(res.data)));
};

const editMentor = (input) => (dispatch) => {
  axios.patch('/mentorprofile', { text: input }) // что должно быть в кудрях?
    .then((res) => dispatch(editMentor(res.data)))
    .catch(console.log);
};

export default mentorSlice.reducer;

export { showMentor, editMentor };
