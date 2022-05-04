import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { H } from 'highlight.run';
import styles from './styles/app.css';
import gloablStyles from './styles/global.css';

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: gloablStyles },
  ];
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Ayush Goyal',
  viewport: 'width=device-width,initial-scale=1',
});

H.init('2d10jqgr', {
  environment: 'production',
  enableStrictPrivacy: false,
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="flex items-center justify-center w-full max-w-3xl mx-auto">
        {/* <div className="-z-10"> */}
          {/* <div className="absolute top-0 bg-purple-300 rounded-full -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-60 md:opacity-70 animate-blob"></div> */}
          {/* <div className="absolute top-1/4 md:top-0 delay-[2000ms] bg-pink-300 rounded-full right-16 w-72 h-72 mix-blend-multiply filter blur-xl opacity-60 md:opacity-70 animate-blob"></div> */}
          {/* <div className="absolute delay-[4000ms] bg-yellow-300 rounded-full -bottom-8 left-40 w-72 h-72 mix-blend-multiply filter blur-xl opacity-60 md:opacity-70 animate-blob"></div> */}
        {/* </div> */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script async defer src="https://a.ayushgoyal.dev/latest.js"></script>
        <script async src="/auto-events.js" />
        <script async src="/session.js"/>
        <noscript>
          <img
            src="https://a.ayushgoyal.dev/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </body>
    </html>
  );
}
