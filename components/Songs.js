import React from 'react';
import { useRecoilValue } from 'recoil';
import { playlistState } from '../atoms/playlistAtom';
import Song from './Song';

function Songs() {
  const playlists = useRecoilValue(playlistState);

  return (
    <div className='text-white px-8 flex flex-col space-y-1 pb-28'>
      {playlists?.tracks.items.map((item, idx) => (
        <Song key={item.track.id} track={item} order={idx} />
      ))}
    </div>
  );
}

export default Songs;
