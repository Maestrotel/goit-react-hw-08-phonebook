import { createAsyncThunk } from '@reduxjs/toolkit';
// import { addContacts, deleteContacts, getContacts } from 'services/api';
import { ContactsAPI } from 'services/userApi';

export const getContactsRequest = createAsyncThunk(
  'contacts/get',
  async (_, thunkApi) => {
    try {
      const response = await ContactsAPI.getContactsRequest();

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactRequest = createAsyncThunk(
  'contacts/add',
  async (contactData, thunkApi) => {
    try {
      const response = await ContactsAPI.addContactRequest(contactData);

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactRequest = createAsyncThunk(
  'contacts/delete',
  async (contactId, thunkApi) => {
    try {
      const response = await ContactsAPI.deleteContactRequest(contactId);

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const getContactsThunk = createAsyncThunk(
//   'contacts/fetchAllContacts',
//   async (_, thunkAPI) => {
//     try {
//       const data = await getContacts();
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContactsThunk = createAsyncThunk(
//   'contacts/deleteContacts',
//   async (id, thunkAPI) => {
//     try {
//       const data = await deleteContacts(id);
//       return data.id;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addContactsThunk = createAsyncThunk(
//   'contacts/addContacts',
//   async (contact, thunkAPI) => {
//     try {
//       const data = await addContacts(contact);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
