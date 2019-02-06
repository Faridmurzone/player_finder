import React, { Component } from 'react';
import Filters from './players/components/Filters';
import PlayerList from './players/components/PlayerList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Filters />
        <PlayerList />
      </div>
    );
  }
}

export default App;
