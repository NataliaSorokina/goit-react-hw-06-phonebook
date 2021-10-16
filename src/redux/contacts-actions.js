import { v4 as uuidv4 } from 'uuid';
import { ADD, DELETE, FILTER } from './contacts-types';

const addContact = (name, number) => {
  return {
    type: ADD,
    payload: {
      id: uuidv4(),
      name: name,
      number: number,
    },
  };
};

const deleteContact = contactId => ({
  type: DELETE,
  payload: contactId,
});

const filterContact = value => ({
  type: FILTER,
  payload: value,
});

export default { addContact, deleteContact, filterContact };
