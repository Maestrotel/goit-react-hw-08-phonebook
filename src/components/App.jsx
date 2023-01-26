import css from './App.module.css';
import { useSelector } from 'react-redux';
import { Routes, Route, NavLink } from 'react-router-dom';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import UserMenu from './UserMenu/UserMenu';

export const App = () => {
  const isLoading = useSelector(state => state.contacts.isLoading);
  console.log(isLoading);
  return (
    <div className={css.mainSection}>
      <header className={css.Header}>
        <nav className={css.NavPart}>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? css.active : css.NavLink)}
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? css.active : css.NavLink)}
          >
            Register
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? css.active : css.NavLink)}
          >
            Contacts
          </NavLink>
          <UserMenu />
        </nav>
      </header>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
};
