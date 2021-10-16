import React from 'react';
import { connect } from 'react-redux';
import contactsActions from 'redux/contacts-actions';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <FilterLabel>
    Find contacts by name{' '}
    <FilterInput type="text" value={value} onChange={onChange} />
  </FilterLabel>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(contactsActions.filterContact(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
