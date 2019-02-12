import React, { Component } from 'react';
import Filters from '../components/Filters';
import PlayerList from '../components/PlayerList';
import { connect } from 'react-redux';
import { fetchPlayersData } from '../../store/actions';
import { searchedPlayers } from '../../store/selectors';

const URL = "https://football-players-b31f2.firebaseio.com/players.json?print=pretty"

class Players extends Component {
  componentDidMount() {
    this.props.fetchData(URL)
  }

  render() {
    const { hasErrored, isLoading, searchPlayers, results } = this.props;
    return (
      <div className="container">
        <h1 className="p-2 ml-3 text-center">FOOTBAL PLAYER FINDER</h1>
        <Filters />
        <PlayerList players={results} isLoading={isLoading} hasErrored={hasErrored} search={searchPlayers} />
      </div>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Players);