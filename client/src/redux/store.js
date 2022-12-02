import { configureStore } from '@reduxjs/toolkit';
import mentorReducer from './mentorSlice';
import studentReducer from './studentSlice';
import searchReducer from './searchSlice';
import authMentorReducer from './slices/authMentorSlice';
import authStudentReducer from './slices/authStudentReducer';

const store = configureStore({
  reducer: {
    mentor: mentorReducer,
    student: studentReducer,
    search: searchReducer,
    mentorAuth: authMentorReducer,
    authStudent: authStudentReducer,
  },
});
export default store;
