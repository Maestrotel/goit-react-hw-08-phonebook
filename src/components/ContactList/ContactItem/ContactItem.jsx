import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactRequest } from 'redux/thunks/contactsThunk';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <li className={css.namesItem}>
      {name}
      {isLoading && <Loader />}
      <span className={css.colon}> : </span>
      <span className={css.numTel}>{number}</span>
      <button
        className={css.btn}
        disabled={isLoading}
        type="button"
        onClick={() => dispatch(deleteContactRequest(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
