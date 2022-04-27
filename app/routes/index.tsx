import Model from '~/components/Model.client';
import { ClientOnly, getClientIPAddress } from 'remix-utils';
import Link from '~/components/Link';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import ContributionGraph from '~/components/Contributions';
import { useEffect, useState } from 'react';
import { get } from '~/utils/cache.server';

export default function Index() {
  const { githubContributions } = useLoaderData<{
    githubContributions: { contributions: any };
    music: any;
  }>();

  const [music, setMusic] = useState<any>();

  const [showModel, setShowModel] = useState<boolean>(false);
  useEffect(() => {
    fetch('https://lastfm.cyclic.app/live')
      .then((r) => r.json())
      .then((d) => setMusic(d));
  }, []);

  return (
    <main className="flex flex-col justify-center w-full gap-8 p-5 m-10 mx-auto">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          hi
        </h2>
        <p>
          I am Ayush. I am a sofware engineer working at{' '}
          <a
            href="https://pabio.com/"
            target="_blank"
            className="underline decoration-dotted"
          >
            Pabio (YC S21)
          </a>
          . I'm a senior at DTU (formerly DCE), New Delhi, India. I enjoy
          playing with the web and help build and improve developer tooling. You
          might find me working on some side projects 🚀
        </p>
        <p>
          Checkout my{' '}
          <span>
            <Link
              href="https://github.com/ayush6624"
              label="github.com/ayush6624"
              style
              fontMono
            />
            ,{' '}
          </span>
          <span>
            <Link
              href="https://www.linkedin.com/in/ayush-goyal6624"
              label="LinkedIn"
              style
              fontMono
            />{' '}
            and{' '}
            <Link
              href="https://ayushgoyal.dev/ayush-resume.pdf"
              label="Resume"
              style
              fontMono
            />
            .
          </span>
        </p>
        <p>
          You can contact me at{' '}
          <span className="font-mono select-all">ayush@ayushgoyal.dev</span> or
          schedule a meeting using my{' '}
          <span>
            <Link
              href="https://calendly.com/ayushg1214/30min"
              label="Calendly"
              style
              fontMono
            />
          </span>
          .
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 ">
          experience
        </h2>
        <ul className="pl-0.5 flex flex-col gap-4">
          <li>
            <div>
              <Link
                href="https://microsoft.com"
                label="Microsoft"
                style
                fontMono
              />
              <span className="ordinal">*</span>
              <p className="text-sm">May 2022 - July 2022</p>
            </div>
          </li>
          <li>
            <div>
              <Link
                href="https://pabio.com"
                label="Pabio (YC S21)"
                style
                fontMono
              />
              <p className="text-sm"> Apr 2021 - Apr 2022</p>
            </div>
          </li>
        </ul>
        <span className="text-xs italic">* Incoming</span>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 ">
          etc
        </h2>
        <div>
          {showModel === false ? (
            githubContributions && (
              <ContributionGraph data={githubContributions.contributions} />
            )
          ) : (
            <>
              <ClientOnly fallback={<div>Loading...</div>}>
                {() => <Model />}
              </ClientOnly>
            </>
          )}
          <button
            className="mt-2 text-sm font-medium underline"
            onClick={() => {
              setShowModel(!showModel);
            }}
          >
            {showModel ? 'Switch back to 2D' : 'Check this out in 3D'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`ml-[2px] inline -translate-y-[2px] ${
                showModel ? '-rotate-180' : ''
              }`}
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          listening to
        </h2>
        <div className="flex flex-row-reverse items-center w-full mb-2 space-x-0 sm:flex-row sm:space-x-2">
          <svg className="h-4 w-4 ml-auto mt-[-2px]" viewBox="0 0 168 168">
            <path
              fill="#1ED760"
              d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
            ></path>
          </svg>
          <div
            className={`inline-flex flex-col w-full max-w-full overflow-x-auto sm:flex-row ${
              music?.status === true && 'whitespace-nowrap'
            }`}
          >
            <p className="font-medium">
              {music?.status === true
                ? `${music.data.name} - ${music.data.artist}`
                : music?.status === false
                ? "Psst. Nothing is playing right now, but here's my playlist 👇"
                : 'Loading...'}
            </p>
            {music?.status !== false && (
              <>
                <span className="hidden mx-2 text-gray-500 sm:block"> – </span>
                <p className="text-gray-500 truncate max-w-max">Spotify</p>
              </>
            )}
          </div>
        </div>
        {music?.status === false && (
          <iframe
            title="Spotify playlist"
            className="-mt-2 border-2"
            src="https://open.spotify.com/embed/playlist/4oLb9NujCRNlHiyKuZ3uwf?utm_source=generator"
            width="100%"
            height="80"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        )}
      </div>
    </main>
  );
}

export let loader: LoaderFunction = async ({ request }) => {
  let ipAddress = getClientIPAddress(request.headers);

  if (ipAddress !== null)
    fetch('https://dark-tan-codfish-fez.cyclic.app/message', {
      method: 'POST',
      body: JSON.stringify({
        secret: process.env.TG_KEY,
        ip: ipAddress,
        type: 'analytics',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  return json({
    githubContributions: await get(
      'https://github-contributions-api.jogruber.de/v4/ayush6624?y=last'
    ),
  });
};
