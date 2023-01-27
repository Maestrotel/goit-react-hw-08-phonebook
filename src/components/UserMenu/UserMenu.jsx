import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutRequest } from 'redux/user/userSlice';
import css from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();

  const email = useSelector(state => state.auth.userData.email);

  const handleLogOut = () => {
    dispatch(logOutRequest());
  };

  return (
    <div className={css.userMenu}>
      <p className={css.userEmail}>{email}</p>
      <button onClick={handleLogOut} type="button" className={css.outButton}>
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
