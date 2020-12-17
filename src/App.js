import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactHlsPlayer from 'react-hls-player';

class App extends Component {
  render() {
    return (
      <ReactHlsPlayer
        url='https://s5.ipcamlive.com/streams/055fda518ee94a6c0/stream.m3u8'
        autoplay={false}
        controls={true}
        width={500}
        height={375}
    />
    );
  }
}

export default App;
