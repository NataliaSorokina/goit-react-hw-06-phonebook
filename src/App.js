import { ToastContainer } from 'react-toastify';
import { MainTitle } from './App.styled';
import Section from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function CreateApp() {
  return (
    <>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
      <ToastContainer autoClose={3000} />
    </>
  );
}
