import { UserContextProvider } from '@/hooks/authUser';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Script
        strategy="afterInteractive"
        src="https://a.ayushgoyal.dev/latest.js"
      />
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://a.ayushgoyal.dev/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </main>
  );
}
