'use client';
import { spotifyClient } from '@/spotify/client';
import { RecommendationsResponse } from '@spotify/web-api-ts-sdk/dist/mjs/endpoints/RecommendationsEndpoints';
import { NewReleases } from '@spotify/web-api-ts-sdk/dist/mjs/types';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { TbPlaylist } from 'react-icons/tb';
import LibraryContent from './LibraryContent';

interface LibraryProps {}

const Library: FC<LibraryProps> = ({}) => {
  const [libraryContent, setLibraryContent] = useState<NewReleases>();

  useEffect(() => {
    const effect = async () => {
      const results = await spotifyClient.browse.getNewReleases();
      setLibraryContent(results);
    };
    effect();
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">New Releases</p>
        </div>
        <AiOutlinePlus
          onClick={() => {}}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {libraryContent &&
          libraryContent.albums.items.map((song) => (
            <Link href={song.external_urls.spotify} key={song.id}>
              <LibraryContent onClick={() => {}} data={song} key={song.id} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Library;
