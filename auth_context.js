import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import Router, { useRouter } from 'next/router';

//api here is an axios instance
import api from './components/fetcher';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('use effect');
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        api.defaults.headers.Authorization = `Bearer ${token}`;
        const { data: user } = await api.get('/cloudflare');
        if (user) setUser(user);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (email, password) => {
    console.log('email ->  ', email, 'password -> ', password);
    const { data } = await api.post('/authentication', { email, password, strategy: 'local' });
    let token = data.accessToken;
    if (token) {
      console.log('Got token');
      console.log(token);
      Cookies.set('token', token, { expires: 60 });
      api.defaults.headers.Authorization = `Bearer ${token}`;
      const { data } = await api.get('/cloudflare');
      setUser(user);
      console.log('Got user/cloudflare data', data);
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
      if (!isAuthenticated && !loading) Router.push('/');
    }, [loading, isAuthenticated]);

    return <Component {...arguments} />;
  };
}
