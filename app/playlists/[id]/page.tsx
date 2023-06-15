'use client';
import Header from '@/components/Header';
import { spotifyClient } from '@/spotify/client';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import TrackItem from './components/TrackItem';

interface pageProps {
  params: any;
  searchParams: {
    subtitle: string;
  };
}

const CategoryPage: FC<pageProps> = ({ params, searchParams }) => {
  const [response, setResponse] = useState<any>();

  useEffect(() => {
    const effect = async () => {
      const resp = await spotifyClient.playlists.getPlaylistItems(params.id);
      setResponse(resp);
    };
    effect();
  }, [params.id]);

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <h1 className="text-white text-3xl font-semibold">{/*  */}</h1>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            {searchParams.subtitle}
          </h1>
        </div>
        <div
          className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8 
        gap-4 
        mt-4
      "
        >
          {response &&
            response.items.map((item: any) => (
              <Link
                target="_blank"
                href={item.track.album.external_urls.spotify}
                key={item.id}
              >
                <TrackItem data={item} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
