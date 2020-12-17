import React, { Component } from 'react';

import Aux from './hoc/Aux.jsx';
import Header from './components/Header.jsx';
import Player from './components/Player.jsx';


class App extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <Player />
      </Aux>
    );
  }
}

export default App;
