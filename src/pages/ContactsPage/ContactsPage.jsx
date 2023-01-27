import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';
// import { useSelector } from 'react-redux';

function ContactsPage() {
  // const isLoading = useSelector(state => state.contacts.isLoading);
  // console.log(isLoading);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default ContactsPage;
