import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/Contacts.slice';

export const ContactsFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onFilterChanged = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <>
      <input
        placeholder="Search contact"
        onChange={e => onFilterChanged(e.target.value)}
        value={filter}
      />
    </>
  );
};
