import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import Router, { useRouter } from 'next/router';

// api here is an axios instance
// I need to hit the cache when serving the site, so instead of using serverSideProps, I use Context API to pass states,
// and use the pricinpal that the API is unauthenticated
import api from './components/fetcher';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('HOC useEffect');
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        api.defaults.headers.Authorization = `Bearer ${token}`;
        let _id = window.localStorage.getItem('user');
        const { data: user } = await api.get('/users/' + _id); // replace it with a /me endpoint containing info about the user
        if (user) setUser(user);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await api.post('/authentication', { email, password, strategy: 'local' });
      let token = data.accessToken;
      if (token) {
        Cookies.set('token', token, { expires: 60 });
        api.defaults.headers.Authorization = `Bearer ${token}`;
        window.localStorage.setItem('user', data.user._id);
        window.location.pathname = '/dashboard';
        // Router.push('/dashboard');
      }
    } catch (err) {
      console.log(err);
      return Promise.reject('Incorrect Password');
    }
  };

  const oauth_login = async (response, strategy) => {
    const { accessToken: access_token } = response;
    try {
      const { data } = await api.post('/authentication', { access_token, strategy });
      Cookies.set('token', data.accessToken, { expires: 60 });
      api.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
      window.localStorage.setItem('user', data.user._id);
      console.log('oauth login successful');
      window.location.pathname = '/dashboard';
      // Router.push('/dashboard');
    } catch (err) {
      console.log(err);
      console.log('Error In Google OAuth');
    }
  };

  const logout = () => {
    console.log('log out');
    Cookies.remove('token');
    setUser(null);
    window.localStorage.removeItem('user');
    window.location.pathname = '/login';
    // Router.push('/login');
  };

  return <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, oauth_login, loading, logout }}>{children}</AuthContext.Provider>;
};

export default function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export function ProtectRoute(Component) {
  return () => {
    const { user, isAuthenticated, loading } = useAuth();
    // const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !loading) Router.push('/login');
    }, [loading, isAuthenticated]);

    return <Component {...arguments} />;
  };
}
