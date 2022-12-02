import { configureStore } from '@reduxjs/toolkit';
import mentorReducer from './slices/mentorSlice';
import studentReducer from './slices/studentSlice';
import searchReducer from './searchSlice';
import navbarReducer from './navbarSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    mentor: mentorReducer,
    student: studentReducer,
    search: searchReducer,
    navbar: navbarReducer,
    user: userReducer,
  },
});
export default store;
