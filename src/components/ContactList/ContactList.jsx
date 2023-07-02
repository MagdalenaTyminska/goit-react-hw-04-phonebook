import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ filter, contacts, handleRemove }) => {
  return (
    <>
      <ul className={css.list}>
        {contacts
          .filter(contact => {
            if (!filter) {
              return true;
            }
            const lowerName = contact.name.toLowerCase();
            const lowerFilter = filter.toLowerCase();
            return lowerName.includes(lowerFilter);
          })
          .map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={css.contactListButton}
                id={contact.id}
                type="button"
                onClick={handleRemove}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  handleRemove: PropTypes.func,
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

export default ContactList;
