import React from 'react';
import './App.css';
import Chat from '../components/Chat/Chat'


import MusicPlayerUI from './Music/MusicPlayerUI'

function App() {
  return (
    <div className="App">
      <div className="form-wrapper">
        <MusicPlayerUI />
      </div>
      <Chat />
    </div>
  );
}

export default App;