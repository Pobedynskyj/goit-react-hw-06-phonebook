import { useDispatch } from 'react-redux';
import { setFilter } from '../StoreFeature/Contacts.slice';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const onFilterChanged = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <>
      <input
        placeholder="Search contact"
        onChange={e => onFilterChanged(e.target.value)}
      />
    </>
  );
};
