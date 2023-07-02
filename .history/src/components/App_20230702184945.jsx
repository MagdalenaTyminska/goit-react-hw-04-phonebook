import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  const updateLocalStorage = updatedContacts => {
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleSubmit = ({ event, name, number }) => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const nameExist = contacts.find(contact => contact.name === name);
    const numberExist = contacts.find(contact => contact.number === number);

    if (nameExist) {
      alert(`${name} is already in contacts`);
    } else if (numberExist) {
      alert(`This number ${number} is already in contacts`);
    } else {
      const updatedContacts = [...contacts, contact];
      setContacts(updatedContacts);
      updateLocalStorage(updatedContacts);
    }
  };

  const handleSearch = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const handleRemove = event => {
    const { id } = event.target;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    updateLocalStorage(updatedContacts);
  };

  return (
    <>
      <div className={css.boxApp}>
        <Section title="Phonebook">
          <ContactForm onSubmit={handleSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter handleSearch={handleSearch} filter={filter} />
          <ContactList
            handleRemove={handleRemove}
            contacts={contacts}
            filter={filter}
          />
        </Section>
      </div>
    </>
  );
};
