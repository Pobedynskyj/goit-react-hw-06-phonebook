import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from '../features/contacts/Contacts.slice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
  },
});
