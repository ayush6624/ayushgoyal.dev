import Model from '~/components/Model.client';
import { ClientOnly } from 'remix-utils';
import Link from '~/components/Link';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import ContributionGraph from '~/components/Contributions';
import wave from '../../public/sound-waves.png';

export default function Index() {
  const { githubContributions, music } = useLoaderData<{
    githubContributions: { contributions: any };
    music: any;
  }>();

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
            and my{' '}
            <Link
              href="https://ayushgoyal.dev/ayush-goyal.pdf"
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
        <div className="relative group">
          {githubContributions && (
            <ContributionGraph data={githubContributions.contributions} />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          listening to
        </h2>
        {(music && music.status) === true ? (
          <div className="flex flex-row gap-2">
            <img src={wave} alt="" width="20px" />
            <span>
              {music.data.name} - {music.data.artist}
            </span>
          </div>
        ) : (
          <div>
            Psst. Nothing is playing right now. Checkout my playlist meanwhile
            👇
            <iframe
              className="mt-4 border-2"
              src="https://open.spotify.com/embed/playlist/4oLb9NujCRNlHiyKuZ3uwf?utm_source=generator"
              width="100%"
              height="80"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        )}
      </div>
      {/* <ClientOnly fallback={<div>Loading...</div>}>
            {() => <Model />}
      </ClientOnly> */}
    </main>
  );
}

export async function loader() {
  const githubContributions = await fetch(
    'https://github-contributions-api.jogruber.de/v4/ayush6624?y=last'
  );

  const music = await fetch('https://lastfm.cyclic.app/live');
  return json({
    githubContributions: await githubContributions.json(),
    music: await music.json(),
  });
}
