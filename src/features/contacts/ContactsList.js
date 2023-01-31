import { selectFilteredContact } from 'features/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../redux/Contacts.slice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContact);

  const deleteContact = id => {
    dispatch(removeContact(id));
  };
  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button type="button" onClick={() => deleteContact(contact.id)}>
              Remove contact
            </button>
          </li>
        );
      })}
    </ul>
  );
};
