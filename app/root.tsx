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

if (process.env.NODE_ENV !== 'development') {
  H.init('2d10jqgr', {
    environment: 'production',
    enableStrictPrivacy: false,
  });
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="I am Ayush Goyal. I am a software engineering intern working at Microsoft. I'm a senior at DTU (formerly DCE), New Delhi, India."
        />
      </head>
      <body className="max-w-2xl p-5 m-10 mx-auto">
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
        <script async src="/session.js" />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
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
