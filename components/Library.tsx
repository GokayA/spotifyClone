import { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { TbPlaylist } from 'react-icons/tb';
import MediaItem from '../app/search/component/SearchItem';
interface LibraryProps {}

const Library: FC<LibraryProps> = ({}) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={() => {}}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {/* {songs.map((song) => (
          <MediaItem
            onClick={(id: string) => onPlay(id)}
            data={song}
            key={song.id}
          />
        ))} */}
      </div>
    </div>
  );
};

export default Library;
