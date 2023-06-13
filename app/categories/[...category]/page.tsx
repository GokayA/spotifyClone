'use client';
import { spotifyClient } from '@/spotify/client';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

import Header from '@/components/Header';
import TrackItemForCategory from './components/TrackItemForCategory';

interface pageProps {
  params: {
    category: string;
  };
  searchParams: {
    keyword: string;
  };
}

const CategoryPage: FC<pageProps> = ({ params, searchParams }) => {
  const [response, setResponse] = useState<any>();

  console.log(searchParams);

  useEffect(() => {
    const fetchCategoryTracks = async () => {
      const track = await spotifyClient.browse.getPlaylistsForCategory(
        params.category
      );
      setResponse(track);
    };
    fetchCategoryTracks();
  }, [params]);
  console.log(params);
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <h1 className="text-white text-3xl font-semibold">Welcome Back!</h1>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            {searchParams.keyword}
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
            response.playlists.items.map((playlist: any) => (
              <Link key={playlist.id} href={`/playlists/${playlist.id}`}>
                <TrackItemForCategory onClick={() => {}} data={playlist} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
