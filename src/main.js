import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Track from './components/Track.js';

let data = [
  { title: "Talking Heads - Found A Job", playing: false, duration: "4:30" },
  { title: "Phoenix - Entertainment", playing: false, duration: "3:40" },
  { title: "Chrome Sparks - Moonraker", playing: true, duration: "6:04" }
];

let tracks = data.map(track => {
  return(
    <Track
      title={track.title}
      playing={track.playing}
      duration={track.duration}
    />
  );
});

ReactDOM.render(
  <ul className="tracks">
    {tracks}
  </ul>,
  document.getElementById('app')
);
