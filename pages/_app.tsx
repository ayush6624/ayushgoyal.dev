import { UserContextProvider } from '../hooks/authUser';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </main>
  );
}
