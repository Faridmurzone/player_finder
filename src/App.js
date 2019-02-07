import React, { Component } from 'react';
import Filters from './players/components/Filters';
import PlayerList from './players/components/PlayerList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Football Player Finder</h1>
        <Filters />
        <PlayerList />
      </div>
    );
  }
}

export default App;
