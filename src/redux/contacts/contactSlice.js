import { createSlice } from '@reduxjs/toolkit';
import {
  addContactRequest,
  deleteContactRequest,
  getContactsRequest,
} from 'redux/thunks/contactsThunk';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    error: null,
    isLoading: false,
    items: [],
    filter: '',
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsRequest.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContactsRequest.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getContactsRequest.rejected, (state, action) => {
        state.contacts = [];
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteContactRequest.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactRequest.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContactRequest.rejected, (state, action) => {
        state.contacts = [];
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addContactRequest.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactRequest.fulfilled, (state, action) => {
        state.items = [action.payload, ...state.items];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContactRequest.rejected, (state, action) => {
        state.contacts = [];
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const { setFilter } = contactSlice.actions;

export default contactSlice.reducer;
