import { configureStore } from '@reduxjs/toolkit';
import authMentorSlice from './slices/authMentorSlice';

export default configureStore({
  reducer: {
    authMentor: authMentorSlice,
  },
});
