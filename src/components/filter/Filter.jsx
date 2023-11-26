import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
    const filter = useSelector(selectFilter)
  const dispatch = useDispatch();

  const filterContact = e => {
    dispatch(filterContacts(e.target.value.toLowerCase()));
    
    
  };

  return (
    <label className={css.filter}>
      Find contacts by name:
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        placeholder="Search"
        onChange={filterContact}
      />
    </label>
  );
};
