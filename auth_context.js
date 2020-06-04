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
      }
    } catch (err) {
      console.log(err);
      return Promise.reject('Incorrect Password');
    }
  };
  const logout = () => {
    Cookies.remove('token');
    setUser(null);
    window.location.pathname = '/login';
  };

  return <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>{children}</AuthContext.Provider>;
};

export default function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export function ProtectRoute(Component) {
  return () => {
    const { user, isAuthenticated, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !loading) Router.push('/login');
    }, [loading, isAuthenticated]);

    return <Component {...arguments} />;
  };
}
