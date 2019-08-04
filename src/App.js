import React from 'react';
import './App.css';
import TrackList from './components/trackList';

function App() {
  return (
    <div className="site">
          <header className="masthead">
      <h1 className="site-title">Marsh Hawk Music</h1>
    </header>

    <main id="content" className="main-area">
      <TrackList />
    </main>
    </div>
  );
}

export default App;
