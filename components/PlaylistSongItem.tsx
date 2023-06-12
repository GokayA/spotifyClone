'use client';
import { Categories, Category } from '@spotify/web-api-ts-sdk/dist/mjs/types';
import Image from 'next/image';
import { FC } from 'react';

interface SongItemProps {
  onClick: (id: string) => void;
  data: any;
}

const PlaylistSongItem: FC<SongItemProps> = ({ onClick, data }) => {
  console.log(data);
  return (
    <div
      onClick={() => {}}
      className="  relative
        group
        flex
        flex-col
        items-center
        justify-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-400/5
        cursor-pointer
        hover:bg-neutral-400/10
        transition
        p-3"
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover"
          fill
          src={data.images[0].url || 'imagepath'}
          alt="songImage"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.name}</p>
      </div>
      {/* <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div> */}
    </div>
  );
};

export default PlaylistSongItem;
