'use client';
import Header from '@/components/Header';

import SearchInput from '@/components/SearchInput';
import { spotifyClient } from '@/spotify/client';
import { SearchResults } from '@spotify/web-api-ts-sdk/dist/mjs/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SearchItem from './component/SearchItem';

interface searchProps {
  searchParams: {
    title: string;
  };
  search?: SearchResults;
}

export const revalidate = 0;

const Search = ({ searchParams }: searchProps) => {
  // TODO NEED TO FIX SEARCH FUNCTION
  const [search, setSearch] = useState<SearchResults>();

  useEffect(() => {
    if (searchParams.title.length === 0) {
      return;
    }

    const search = async () => {
      const result = await spotifyClient.search(searchParams.title, ['track']);
      setSearch(result);
    };
    search();
  });

  return (
    <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput />
        </div>
      </Header>
      <div className="flex flex-col gap-y-2 w-full px-6">
        {search &&
          search.tracks.items.map((song) => (
            <Link href={song.external_urls.spotify} key={song.id}>
              <div className="flex items-center gap-x-4 w-full">
                <div className="flex-1">
                  <SearchItem onClick={() => {}} data={song} />
                </div>
              </div>
            </Link>
          ))}
      </div>
      <pre>{JSON.stringify(search, null, 2)}</pre>
    </div>
  );
};

export default Search;
{
}
