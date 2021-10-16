import { useState, useEffect } from 'react';
import { MainTitle } from './App.styled';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function CreateApp() {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts') ?? []),
  // );
  const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // const formSubmitHandler = data => {
  //   const { name, number } = data;
  //   const newContact = {
  //     id: uuidv4(),
  //     name: name,
  //     number: number,
  //   };

  //   if (contacts.some(contact => contact.name === newContact.name)) {
  //     alert(`${newContact.name} is already in contacts`);
  //     return;
  //   } else {
  //     setContacts(prevState => [...prevState, newContact]);
  //   }
  // };

  useEffect(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem('contacts'));
    savedContacts && setContacts(savedContacts);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
