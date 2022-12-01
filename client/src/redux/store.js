import { configureStore } from '@reduxjs/toolkit';
import mentorReducer from './mentorSlice';
import studentReducer from './studentSlice';

const store = configureStore({
  reducer: {
    mentor: mentorReducer,
    student: studentReducer,
  },
});
export default store;
