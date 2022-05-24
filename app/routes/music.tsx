import { useEffect, useState } from 'react';
import Link from '~/components/Link';
import { NowPlaying, RecentTracks } from '~/components/Spotify';

const MusicPage = () => {
  const [recentTracks, setRecentTracks] = useState<any>();
  const [music, setMusic] = useState<any>();

  useEffect(() => {
    fetch('https://lastfm.ayushgoyal.dev/recent-tracks')
      .then((r) => r.json())
      .then((d) => setRecentTracks(d));

    fetch('https://lastfm.ayushgoyal.dev/live')
      .then((r) => r.json())
      .then((d) => setMusic(d));
  }, []);

  return (
    <main className="flex flex-col justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          my music taste
        </h1>
        <NowPlaying music={music} />
      </div>
      <div className="flex flex-col gap-4 my-4">
        <p>
          I use{' '}
          <span>
            <Link
              href="https://last.fm/ayush6624"
              label="last.fm"
              style
              fontMono
            />{' '}
          </span>
          to keep a record of my listening history, and also get some cool insights!
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-2xl font-semibold text-gray-600">recent tracks</h2>
        <RecentTracks recentTracks={recentTracks} />
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-xl font-semibold text-gray-600">
          My Spotify playlist 👇
        </h2>
        <iframe
          title="Spotify playlist"
          className="mt-2 border-2"
          src="https://open.spotify.com/embed/playlist/4oLb9NujCRNlHiyKuZ3uwf?utm_source=generator"
          width="100%"
          height="80"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>
    </main>
  );
};

export default MusicPage;
