import { configureStore } from '@reduxjs/toolkit';
import mentorReducer from './slices/mentorSlice';
import studentReducer from './slices/studentSlice';
import searchReducer from './searchSlice';
import authMentorReducer from './slices/authMentorSlice';
import navbarReducer from './navbarSlice';

const store = configureStore({
  reducer: {
    mentor: mentorReducer,
    student: studentReducer,
    search: searchReducer,
    mentorAuth: authMentorReducer,
    navbar: navbarReducer,
  },
});
export default store;
