import { AuthProvider } from '../auth_context';
import { CssBaseline, ZeitProvider } from '@zeit-ui/react';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [themeType, setThemeType] = useState('light');

  useEffect(() => {
    let currentTheme = window.localStorage.getItem('theme');
    currentTheme ? setThemeType(currentTheme) : window.localStorage.setItem('theme', 'light');
  }, []);

  useEffect(() => window.localStorage.setItem('theme', themeType), [themeType]);

  const switchThemes = () => setThemeType((lastThemeType) => (lastThemeType === 'dark' ? 'light' : 'dark'));

  return (
    <ZeitProvider theme={{ type: themeType }}>
      <CssBaseline />
      <AuthProvider>
        <Head>
          <title>Ayush Goyal</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer switchTheme={switchThemes} />
      </AuthProvider>
    </ZeitProvider>
  );
}

export default MyApp;
