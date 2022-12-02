import { configureStore } from '@reduxjs/toolkit';
import mentorReducer from './mentorSlice';
import studentReducer from './studentSlice';
import searchReducer from './searchSlice';
import authMentorReducer from './slices/authMentorSlice';
import authStudentSlice from './slices/authStudentSlice';

const store = configureStore({
  reducer: {
    mentor: mentorReducer,
    student: studentReducer,
    search: searchReducer,
    mentorAuth: authMentorReducer,
    authStudent: authStudentSlice,
  },
});
export default store;
