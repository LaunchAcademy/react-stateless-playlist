import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const Track = props => {
  if(props.playing) {
    var playIcon = <i className="fa fa-pause-circle-o" />;
  } else {
    var playIcon = <i className="fa fa-play-circle-o" />;
  }

  return(
    <li className="track">
      {playIcon}
      <span className="title">{props.title}</span>
      <span className="duration">{props.duration}</span>
    </li>
  );
}

let trackOne = <li className="track">
  <i className="fa fa-play-circle-o" />
  <span className="title">Talking Heads - Found A Job</span>
  <span className="duration">4:30</span>
</li>;

let trackTwo = <li className="track">
  <i className="fa fa-play-circle-o" />
  <span className="title">Phoenix - Entertainment</span>
  <span className="duration">3:40</span>
</li>;

let trackThree = <li className="track">
  <i className="fa fa-pause-circle-o" />
  <span className="title">Chrome Sparks - Moonraker</span>
  <span className="duration">6:04</span>
</li>;

ReactDOM.render(
  <ul className="tracks">
    {trackOne}
    {trackTwo}
    {trackThree}
  </ul>,
  document.getElementById('app')
)
