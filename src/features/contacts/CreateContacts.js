import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addContact } from '../StoreFeature/Contacts.slice';

export const CreateContacts = () => {
  const dispatch = useDispatch();

  const [onNewContactName, setOnNewContactName] = useState('');
  const [onNewContactNumber, setOnNewContactNamber] = useState('');

  const addNewContact = () => {
    const newContact = {
      id: nanoid(),
      name: onNewContactName,
      number: onNewContactNumber,
    };
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
