import React from 'react';
import css from './UserMenu.module.css';

function UserMenu() {
  return (
    <div className={css.userMenu}>
      <p className={css.userEmail}>mango@mail.com</p>
      <button>Logout</button>
    </div>
  );
}

export default UserMenu;
