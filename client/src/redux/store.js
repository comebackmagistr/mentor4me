import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from './userInfoSlice';
import searchReducer from './searchSlice';
import userReducer from './userSlice';
import applicationReducer from './applicationSlice';
import eventReducer from './eventSlice';
import activeReduser from './modalSlice';

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    search: searchReducer,
    user: userReducer,
    application: applicationReducer,
    events: eventReducer,
    active: activeReduser,
  },
});
export default store;
