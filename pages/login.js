import React, { useEffect } from 'react';
import useAuth, { ProtectRoute } from '../auth_context';

function Login() {
  let username = 'test@gmail.com';
  let password = 'test';
  const { login, logout, user, loading, isAuthenticated } = useAuth();
  const login_now = async (e) => {
    console.log(user);
    console.log('isAuthenticated -> ', isAuthenticated);
    login(username, password);
    e.preventDefault();
  };
  return (
    <>
      <h1>Login </h1>
      <button onClick={(e) => login_now(e)}>Login</button>
      <button
        onClick={(_) => {
          logout();
        }}
      >
        Logout
      </button>
    </>
  );
}

export default Login;
// export default ProtectRoute(Login);
