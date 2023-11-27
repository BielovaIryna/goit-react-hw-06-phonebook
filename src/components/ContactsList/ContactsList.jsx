import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import {selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
   const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <ContactsItem
            key={contact.id}
            contact={contact}
            del={() => handleDeleteContact(contact.id)}
          />
        );
      })}
    </ul>
  );
};
