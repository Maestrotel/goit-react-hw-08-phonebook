import css from './RegisterPage.module.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserRequest } from 'redux/user/userSlice';
import Loader from 'components/Loader/Loader';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(state => state.auth.isLoading);
  const userData = useSelector(state => state.auth.userData);
  const error = useSelector(state => state.auth.error);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (userData !== null) navigate('/contacts');
  }, [userData, navigate]);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      name,
      email,
      password,
    };

    dispatch(registerUserRequest(formData));
  };

  return (
    <div>
      <h1>Registration</h1>
      {isLoading && <Loader />}
      {error && <p>Something went wrong {error}</p>}
      <form onSubmit={handleSubmit} className={css.formStyle}>
        <label className={css.formRegLabel}>
          Name:
          <input
            className={css.formRegInput}
            onChange={e => setName(e.target.value)}
            autoComplete="name"
            value={name}
            type="text"
            required
          />
        </label>
        <label className={css.formRegLabel}>
          Email:
          <input
            className={css.formRegInput}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
            value={email}
            type="email"
            required
          />
        </label>
        <label className={css.formRegLabel}>
          Password:
          <input
            className={css.formRegInput}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
            value={password}
            type="password"
            required
          />
        </label>
        <button type="submit" className={css.RegBtn}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
