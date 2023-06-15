'use client';
import Image from 'next/image';
import { FC } from 'react';

interface LibraryContentProps {
  onClick?: () => void;
  data: any;
}

const LibraryContent: FC<LibraryContentProps> = ({ onClick, data }) => {
  // const handleClick = () => {
  //   if (onClick) {
  //     return onClick('');
  //   }
  //   //Todo default turn on player
  // };
  return (
    <div
      // onClick={handleClick}
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
          src={data.images[0].url || 'imageurl'}
          alt="MediaItem"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.name}</p>
        <p className="text-neutral-400 text-sm truncate">
          By {data.artists[0].name}
        </p>
      </div>
    </div>
  );
};

export default LibraryContent;
