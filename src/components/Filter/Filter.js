import React from 'react';
import contactsActions from 'redux/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getFilter } from '../../redux/contacts-selectors/ContactList-Filter-selectors';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <FilterLabel>
      Find contacts by name{' '}
      <FilterInput
        type="text"
        value={value}
        onChange={event =>
          dispatch(contactsActions.filterContact(event.target.value))
        }
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
