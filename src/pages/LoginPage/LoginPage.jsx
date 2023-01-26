import React from 'react';

function LoginPage() {
  return (
    <div>
      <h1>LogIn</h1>
      {/* {isLoading && <Loader />}
      {error && <ErrorIndicator error={error} />} */}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="email"
            required
          />
        </label>
        <label>
          Password:
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            required
          />
        </label>
        <button disabled={isLoading} type="submit">
          Enter
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
