import { AuthProvider } from '../lib/auth_context';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
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
    <GeistProvider theme={{ type: themeType }}>
      <CssBaseline />
      <AuthProvider>
        <Head>
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
          <title>Ayush Goyal</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <style jsx global>{`
          ::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <Footer switchTheme={switchThemes} mode={themeType} />
      </AuthProvider>
    </GeistProvider>
  );
}

export default MyApp;
