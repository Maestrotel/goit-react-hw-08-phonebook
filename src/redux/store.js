import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactSlice';
import { userReducer } from './user/userSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: userReducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contacts/contact.slice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer,
//     auth: userReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
