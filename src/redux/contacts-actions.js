import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', (name, number) => {
  return {
    payload: {
      id: uuidv4(),
      name: name,
      number: number,
    },
  };
});

const deleteContact = createAction('contacts/delete');

const filterContact = createAction('contacts/filter');

const contactsActions = { addContact, deleteContact, filterContact };

export default contactsActions;
