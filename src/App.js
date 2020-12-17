import React, { Component } from 'react';

import Aux from './hoc/Aux.jsx';
import Header from './components/Header.jsx';
import Player from './components/Player.jsx';
import Sheet from './lib/helper';


class App extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <Player />
        <Sheet />
      </Aux>
    );
  }
}

export default App;
