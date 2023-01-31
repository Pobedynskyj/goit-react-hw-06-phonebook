import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from '../redux/Contacts.slice';

export const CreateContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);

  const [onNewContactName, setOnNewContactName] = useState('');
  const [onNewContactNumber, setOnNewContactNamber] = useState('');

  const addNewContact = () => {
    const newContact = {
      id: nanoid(3),
      name: onNewContactName,
      number: onNewContactNumber,
    };
    const checkContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (checkContact) {
      alert(`${newContact.name} is already used`);
      return;
    }
    dispatch(addContact(newContact));
  };

  return (
    <div>
      <h2>Add contact</h2>
      <input
        placeholder="Name"
        value={onNewContactName}
        onChange={e => setOnNewContactName(e.target.value)}
      />
      <input
        placeholder="Number"
        value={onNewContactNumber}
        onChange={e => setOnNewContactNamber(e.target.value)}
      />
      <button type="submit" onClick={addNewContact}>
        Add contact
      </button>
    </div>
  );
};
