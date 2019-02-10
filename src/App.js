import React, { Component } from 'react';
import Filters from './players/components/Filters';
import PlayerList from './players/components/PlayerList';
import { connect } from 'react-redux';
import { fetchPlayersData } from './store/actions';
import { createSelector } from 'reselect';
import dateToAge from './players/utils';

class App extends Component {

  componentDidMount() {
    this.props.fetchData('https://football-players-b31f2.firebaseio.com/players.json?print=pretty')
  }

  render() {
    const { hasErrored, isLoading, searchPlayers, results } = this.props;

    return (
      <div className="container">
        <h1 className="p-2 ml-3">FOOTBAL PLAYER FINDER {this.props.searchPlayers.name}</h1>
        <Filters />
        <PlayerList players={results} isLoading={isLoading} hasErrored={hasErrored} search={searchPlayers} />
      </div>
    )
  }
}

const getName = (state) => state.searchPlayers.name
const getPosition = (state) => state.searchPlayers.position
const getAge = (state) => state.searchPlayers.age

const searchedPlayers = createSelector(
    [props => props.players, getName, getPosition, getAge],
    (players, name, position, age) => players
    .filter((player) => {
      return player.name.toLowerCase().includes(name.toLowerCase())
    }
    )
    .filter((player) => { 
      return player.position.includes(position)
    })
    .filter((player) => 
      age ? String(dateToAge(player.dateOfBirth)).includes(String(age)) : true
    )
  )

const mapStateToProps = (state, props) => {
  return {
      hasErrored: state.playersHasErrored,
      isLoading: state.playersIsLoading,
      searchPlayers: state.searchPlayers,
      results: searchedPlayers(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(fetchPlayersData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);