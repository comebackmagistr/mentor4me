import { configureStore } from '@reduxjs/toolkit';
import mentorReducer from './mentorSlice';
import studentReducer from './studentSlice';
import searchReducer from './searchSlice';
import authMentorReducer from './slices/authMentorSlice';
import navbarReducer from './navbarSlice';
import authStudentSlice from './slices/authStudentSlice';

const store = configureStore({
  reducer: {
    mentor: mentorReducer,
    student: studentReducer,
    search: searchReducer,
    mentorAuth: authMentorReducer,
    navbar: navbarReducer,
    authStudent: authStudentSlice,
  },
});
export default store;
