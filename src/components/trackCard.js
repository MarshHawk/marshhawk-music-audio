import React from "react";
import { PlayCircle, PauseCircle, BookOpen } from "styled-icons/feather";
import { connect } from "react-redux";
import { play, pause } from "../actions";

function TrackCard(props) {
    const NFClient = window.NFClient;
    let cardElement = React.createRef();
    let audioElement = React.createRef();
  let playingStyle = {
    "box-shadow": "0 0 5px #ea4335",
    margin: "5px 1px 3px 0px",
    border: ".333em solid #ea4335"
  };

  function handlePlayClick() {
    let newTrack;

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

  function handleShowScoreClick(scoreId) {
    NFClient.init(function(info) {
      });
    var options = {
        width: cardElement.current.offsetWidth,
      };
      var scoreView = new NFClient.ScoreView(scoreId, scoreId, options);
  }

  

  return (
    <li className="card" ref={cardElement} style={props.isPlaying ? playingStyle : {}}>
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
        {props.scoreId && <button className="show-score" onClick={() =>handleShowScoreClick(props.scoreId)}>
            <BookOpen />
            Show Score
          </button>
        }
        <div id={props.scoreId} ></div>
      </div>
      
    </li>
  );
}

export default connect(
  null,
  { play, pause }
)(TrackCard);
