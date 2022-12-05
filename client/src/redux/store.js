import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from './userInfoSlice';
import searchReducer from './searchSlice';
import userReducer from './userSlice';
import eventReducer from './eventSlice';
import activeReduser from './modalSlice';
import activeEditReduser from './modalSliceEdit';
import modelContentReduser from './modelContentSlice';

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    search: searchReducer,
    user: userReducer,
    events: eventReducer,
    active: activeReduser,
    activeedit: activeEditReduser,
    modalContent: modelContentReduser,
  },
});
export default store;
