'use client';
import Image from 'next/image';
import { FC } from 'react';

interface SearchItemProps {
  data: any;
}

const SearchItem: FC<SearchItemProps> = ({ data }) => {
  return (
    <div
      className=" flex 
        items-center 
        gap-x-3 
        cursor-pointer 
        hover:bg-neutral-800/50 
        w-full 
        p-2 
        rounded-md"
    >
      <div
        className=" relative 
          rounded-md 
          min-h-[48px] 
          min-w-[48px] 
          overflow-hidden"
      >
        <Image
          fill
          src={data.album.images[0].url || 'imageurl'}
          alt="MediaItem"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.name}</p>
        <p className="text-neutral-400 text-sm truncate">
          By {data.album.artists[0].name}
        </p>
      </div>
    </div>
  );
};

export default SearchItem;
