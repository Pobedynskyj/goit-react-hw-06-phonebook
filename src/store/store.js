import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from '../features/StoreFeature/Contacts.slice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
  },
});
