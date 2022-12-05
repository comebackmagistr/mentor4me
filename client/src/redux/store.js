import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from './userInfoSlice';
import searchReducer from './searchSlice';
import userReducer from './userSlice';
import eventReducer from './eventSlice';

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    search: searchReducer,
    user: userReducer,
    events: eventReducer,
  },
});
export default store;
