import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField/InputField'; // Update the import statement
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ event, name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={css.contactFormTable} onSubmit={handleSubmit}>
      <InputField
        label="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я
                ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters,
                apostrophe, dash and spaces. For example Adrian, Jacob Mercer,
                Charles de Batz de Castelmore d'Artagnan"
        required={true}
        value={name}
        onChange={handleChange}
      />
      <InputField
        label="number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required={true}
        value={number}
        onChange={handleChange}
      />
      <button type="submit" className={css.contactFormButton}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
