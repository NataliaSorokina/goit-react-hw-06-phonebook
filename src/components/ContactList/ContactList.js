import React from 'react';
import { connect } from 'react-redux';
import contactsActions from 'redux/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { List, ListItem } from 'components/ContactList/ContactList.styled';
import { Button } from 'components/Button/Button.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  // const filteredContacts = useSelector(getFilteredContacts);
  // const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

const getFilteredContacts = (allContacts, filter) => {
  const normilizedFilter = filter.toLowerCase();

  return allContacts.filter(record =>
    record.name.toLowerCase().includes(normilizedFilter),
  );
};
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
