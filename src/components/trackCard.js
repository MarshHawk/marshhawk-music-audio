import React from "react";
import { PlayCircle, PauseCircle } from "styled-icons/feather";
import { connect } from "react-redux";
import { play, pause } from "../actions";

function TrackCard(props) {
  let audioElement = React.createRef();
  let playingStyle = {
    "box-shadow": "0 0 5px #ea4335",
    //padding: '3px 0px 3px 3px',
    margin: "5px 1px 3px 0px",
    border: ".333em solid #ea4335"
  };

  function handlePlayClick() {
    let newTrack;
    console.log(props.track);
    if (!props.track) {
      newTrack = props.context.createMediaElementSource(audioElement.current);
      newTrack.connect(props.context.destination);
    }
    if (props.context.state === "suspended") props.context.resume();
    audioElement.current.play();
    props.play(props.id, newTrack ? newTrack : props.track);
  }

  function handlePauseClick() {
    audioElement.current.pause();
    props.pause(props.id);
  }

  return (
    <li className="card" style={props.isPlaying ? playingStyle : {}}>
      <audio
        id={props.id}
        src={props.url}
        ref={audioElement}
        crossOrigin="anonymous"
      />
      <div className="details">
        {!props.isPlaying ? (
          <button className="play-pause" onClick={handlePlayClick}>
            <PlayCircle />
            Play
          </button>
        ) : (
          <button className="play-pause" onClick={handlePauseClick}>
            <PauseCircle />
            Pause
          </button>
        )}
        <h2>{props.title}</h2>
        <div className="meta">{props.description}</div>
      </div>
    </li>
  );
}

export default connect(
  null,
  { play, pause }
)(TrackCard);
