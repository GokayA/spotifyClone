'use client';
import Image from 'next/image';
import { FC } from 'react';

interface SongItemProps {
  data: any;
}

const TrackItem: FC<SongItemProps> = ({ data }) => {
  return (
    <div
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
          src={data.track.album.images[0].url || 'imagepath'}
          alt="songImage"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.track.name}</p>
        <p className="text-neutral-400 text-sm truncate">
          By {data.track.album.artists[0].name}
        </p>
      </div>
    </div>
  );
};

export default TrackItem;
