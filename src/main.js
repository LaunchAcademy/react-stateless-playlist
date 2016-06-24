import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Track from './components/Track.js';

let trackOne = <Track title="Talking Heads - Found A Job" playing={false} duration={"4:30"} />;
let trackTwo = <Track title="Phoenix - Entertainment" playing={false} duration={"3:40"} />;
let trackThree = <Track title="Chrome Sparks - Moonraker" playing={true} duration={"6:04"} />;

ReactDOM.render(
  <ul className="tracks">
    {trackOne}
    {trackTwo}
    {trackThree}
  </ul>,
  document.getElementById('app')
);
