import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact, removeContact } from './Contacts.slice';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
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

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  console.log(contacts);
  return (
    <>
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
      <ul>
        {contacts.map(contact => {
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
    </>
  );
};
