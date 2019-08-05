import React from "react";
import "./App.css";
import TrackList from "./components/trackList";
import { connect } from "react-redux";

function App(props) {
  return props.isWebAudioSupported ? (
    <div className="site">
      <header className="masthead">
        <h1 className="site-title">Marsh Hawk Music</h1>
      </header>

      <main id="content" className="main-area">
        <TrackList />
      </main>
    </div>
  ) : (
    <h2 className="noaudio">
      WebAudio is not supported in this browser. You need a more modern browser
      to use this app. Try the latest Chrome or Safari
    </h2>
  );
}

function mapState(state) {
  return { isWebAudioSupported: state.audioContext.isSupported };
}

export default connect(mapState)(App);
