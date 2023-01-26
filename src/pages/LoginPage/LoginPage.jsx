import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUserRequest } from 'redux/user/userSlice';
import css from './LoginPage.module.css';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(state => state.auth.isLoading);
  const userData = useSelector(state => state.auth.userData);
  const error = useSelector(state => state.auth.error);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (userData !== null) navigate('/contacts');
  }, [userData, navigate]);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      email,
      password,
    };

    dispatch(loginUserRequest(formData));
  };
  return (
    <div>
      <h1>Login</h1>
      {isLoading && <Loader />}
      {error && <p>Something went wrong {error}</p>}
      <form onSubmit={handleSubmit} className={css.formLogStyle}>
        <label className={css.formLogLabel}>
          Email:
          <input
            className={css.formLogInput}
            onChange={e => setEmail(e.target.value)}
            value={email}
            autoComplete="email"
            type="email"
            required
          />
        </label>
        <label className={css.formLogLabel}>
          Password:
          <input
            className={css.formLogInput}
            onChange={e => setPassword(e.target.value)}
            value={password}
            autoComplete="current-password"
            type="password"
            required
          />
        </label>
        <button disabled={isLoading} type="submit" className={css.LogBtn}>
          Enter
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
