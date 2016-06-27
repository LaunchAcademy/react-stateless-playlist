import React from 'react';
import Track from './Track.js';

const Playlist = props => {
  let tracks = props.data.map(track => {
    return(
      <Track
        key={track.id}
        title={track.title}
        playing={track.playing}
        duration={track.duration}
      />
    );
  });

  return(
    <ul className="tracks">
      {tracks}
    </ul>
  );
}

export default Playlist;
