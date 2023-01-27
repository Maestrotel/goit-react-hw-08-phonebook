import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactSlice';
import { userReducer } from './user/userSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: userReducer,
  },
});
