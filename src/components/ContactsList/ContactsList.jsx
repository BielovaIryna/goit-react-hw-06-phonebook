import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilter = () => {
    let filteredCondtacts = [];
    if (filter) {
      filteredCondtacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
      );
    } else {
      return (filteredCondtacts = contacts);
    }

    return filteredCondtacts;
  };
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul className={css.contactList}>
      {handleFilter().map(contact => {
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
