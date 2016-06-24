import React from 'react';

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

export default Track;
