'use client';
import CategorySongItem from '@/components/CategorySongItem';
import Header from '@/components/Header';
import PlaylistSongItem from '@/components/PlaylistSongItem';
import { spotifyClient } from '@/spotify/client';
import {
  Categories,
  PlaylistsWithTrackReferences,
} from '@spotify/web-api-ts-sdk/dist/mjs/types';
import { useEffect, useState } from 'react';

const Deneme = () => {
  const [categories, setCategories] = useState<Categories>();
  const [playlist, setPlaylist] = useState<PlaylistsWithTrackReferences>();

  useEffect(() => {
    const fetchCategories = async () => {
      const cat = await spotifyClient.browse.getCategories();
      setCategories(cat);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPlaylist = async () => {
      const list = await spotifyClient.browse.getFeaturedPlaylists();
      setPlaylist(list);
    };
    fetchPlaylist();
  }, []);

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <h1 className="text-white text-3xl font-semibold">Welcome Back!</h1>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Featured Playlists
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
          {playlist &&
            playlist.playlists.items.map((item) => (
              <PlaylistSongItem onClick={() => {}} key={item.id} data={item} />
            ))}
        </div>
      </div>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Categories</h1>
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
          {categories &&
            categories.categories.items.map((item) => (
              <CategorySongItem onClick={() => {}} key={item.id} data={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Deneme;
