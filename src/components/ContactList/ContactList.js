import React from 'react';
import { connect } from 'react-redux';
import contactsActions from 'redux/contacts-actions';
import PropTypes from 'prop-types';
import { List, ListItem } from 'components/ContactList/ContactList.styled';
import { Button } from 'components/Button/Button.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
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

const getfilteredContacts = (allContacts, filter) => {
  const normilizedFilter = filter.toLowerCase();

  return allContacts.filter(record =>
    record.name.toLowerCase().includes(normilizedFilter),
  );
};
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getfilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
