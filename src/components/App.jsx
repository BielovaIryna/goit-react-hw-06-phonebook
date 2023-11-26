import { Notify } from 'notiflix';
import css from './App.module.css';
import { useSelector } from 'react-redux';

import { selectContacts } from 'redux/selectors';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './filter/Filter';
import { ContactsForm } from'./ContactsForm/ContactsForm';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div className={css.section}>
      <h1 className={css.mainTitle}> Phonebook</h1>
      <ContactsForm />
      <h2 className={css.secondaryTitle}>Contacts</h2>
      {contacts.length >0 ?
      (<Filter />): Notify.failure("Oops! Your contact list is empty")}
      {contacts.length>0 && (<ContactList/>)}
      
    </div>
  );
};
