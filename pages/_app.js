import { AuthProvider } from '../auth_context';
import { CssBaseline, ZeitProvider } from '@zeit-ui/react';
import Router from 'next/router';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [themeType, setThemeType] = useState('light');
  const switchThemes = () => {
    setThemeType((lastThemeType) => (lastThemeType === 'dark' ? 'light' : 'dark'));
  };
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
        <Footer />
      </AuthProvider>
    </ZeitProvider>
  );
}

export default MyApp;
