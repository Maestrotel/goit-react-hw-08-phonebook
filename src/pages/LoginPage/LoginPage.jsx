import React from 'react';
import css from './LoginPage.module.css';

function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      {/* {isLoading && <Loader />}
      {error && <ErrorIndicator error={error} />} */}
      <form
        // onSubmit={handleSubmit}
        className={css.formLogStyle}
      >
        <label className={css.formLogLabel}>
          Email:
          <input
            className={css.formLogInput}
            // onChange={e => setEmail(e.target.value)}
            // value={email}
            autoComplete="email"
            type="email"
            required
          />
        </label>
        <label className={css.formLogLabel}>
          Password:
          <input
            className={css.formLogInput}
            // onChange={e => setPassword(e.target.value)}
            // value={password}
            autoComplete="current-password"
            type="password"
            required
          />
        </label>
        <button
          // disabled={isLoading}
          type="submit"
          className={css.LogBtn}
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
