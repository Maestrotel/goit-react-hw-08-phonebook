import axios from 'axios';

const BASE_URL = 'https://63d143a33f08e4a8ff941b1d.mockapi.io/contacts/';

const contactsAPI = axios.create({
  baseURL: BASE_URL,
});

export const getContacts = async () => {
  const { data } = await contactsAPI.get();
  return data;
};

export const deleteContacts = async id => {
  const { data } = await contactsAPI.delete(id);
  return data;
};

export const addContacts = async contact => {
  const { data } = await contactsAPI.post('', contact);
  return data;
};
