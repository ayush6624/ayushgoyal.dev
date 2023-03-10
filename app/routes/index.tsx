import Model from '~/components/Model.client';
import { ClientOnly, getClientIPAddress } from 'remix-utils';
import Link from '~/components/Link';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import ContributionGraph from '~/components/Contributions';
import { useEffect, useState } from 'react';
import { get } from '~/utils/cache.server';
import { NowPlaying } from '~/components/Spotify';

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function Index() {
  const { githubContributions } = useLoaderData<{
    githubContributions: { contributions: any };
    music: any;
  }>();

  const [music, setMusic] = useState<any>();

  const [showModel, setShowModel] = useState<boolean>(false);
  useEffect(() => {
    fetch('https://lastfm.ayushgoyal.dev/live')
      .then((r) => r.json())
      .then((d) => setMusic(d));
  }, []);

  return (
    <main className="flex flex-col justify-center w-full gap-8 mx-auto">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          hi
        </h1>
        <p>
          I am Ayush Goyal. I am a software engineer working at{' '}
          <a
            href="https://www.usenimbus.com/"
            target="_blank"
            className="underline decoration-dotted"
          >
            Nimbus (YC W22)
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
              href="https://ayushgoyal.dev/resume.pdf"
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
              href="https://calendly.com/ayushg1214/30min?hide_gdpr_banner=1"
              onClick={(e) => {
                e.preventDefault();
                window.Calendly.initPopupWidget({
                  url: 'https://calendly.com/ayushg1214/30min?hide_gdpr_banner=1',
                });
                return false;
              }}
              label="Calendly"
              style
              fontMono
            />
          </span>
          .
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 ">
          experience
        </h1>
        <ul className="pl-0.5 flex flex-col gap-4">
          <li>
            <div>
              <Link
                href="https://www.usenimbus.com"
                label="Nimbus (YC W22)"
                style
                fontMono
              />
              <span className="ordinal">*</span>
              <p className="text-sm">July 2022 - present</p>
            </div>
          </li>
          <li>
            <div>
              <Link
                href="https://microsoft.com"
                label="Microsoft"
                style
                fontMono
              />
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
        <span className="text-xs italic">* Ongoing</span>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 ">
          etc
        </h1>
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
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          listening to
        </h1>
        <NowPlaying music={music} showRedirect />
      </div>
    </main>
  );
}

export let loader: LoaderFunction = async ({ request }) => {
  let ipAddress = getClientIPAddress(request.headers);

  if (ipAddress !== null)
    fetch('https://tg.ayushgoyal.dev/message', {
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
