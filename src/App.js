import React, { Component } from 'react';
import Filters from './players/components/Filters';
import PlayerList from './players/components/PlayerList';


class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="p-2 ml-3">FOOTBAL PLAYER FINDER</h1>
        <Filters />
        <PlayerList />
      </div>
    )
  }
}

export default App;
