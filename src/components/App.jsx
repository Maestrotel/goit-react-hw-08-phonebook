import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, NavLink } from 'react-router-dom';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import UserMenu from './UserMenu/UserMenu';
import { useEffect } from 'react';
import { authUserRequest } from 'redux/user/userSlice';

export const App = () => {
  const userData = useSelector(state => state.auth.userData);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) return;

    dispatch(authUserRequest());
  }, [dispatch]);

  const isUserAuthenticated = userData !== null;

  return (
    <div className={css.mainSection}>
      <header className={css.Header}>
        <nav className={css.NavPart}>
          {isUserAuthenticated ? (
            <>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? css.active : css.NavLink
                }
              >
                Contacts
              </NavLink>
              <UserMenu />
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? css.active : css.NavLink
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? css.active : css.NavLink
                }
              >
                Register
              </NavLink>
            </>
          )}
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
