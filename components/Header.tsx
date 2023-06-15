'use client';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { twMerge } from 'tailwind-merge';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  return (
    <div
      className={twMerge(
        ` 
  h-fit bg-gradient-to-b from-emerald-800 p-6
  `,
        className
      )}
    >
      <div className="flex w-full mb-4 items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="bg-black rounded-full flex  hover:opacity-75 transition"
          >
            <RxCaretLeft size={35} className=" text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className="bg-black rounded-full hover:opacity-75 transition"
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div className="flex md:hidden mb-4 gap-x-2">
          <button className="rounded-full bg-white p-2 flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black" size={20} />
          </button>

          <button className="rounded-full bg-white p-2 flex items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4"></div>
      </div>
      {children}
    </div>
  );
};

export default Header;
