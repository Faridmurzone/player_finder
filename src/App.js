import React, { Component } from 'react';
import Players from './players/containers/Players'
class App extends Component {

  render() {
    return (
      // App includes playerlist. 
      // On this place could use react-routes to switch sections
     <Players />
    )
  }
}

export default App;