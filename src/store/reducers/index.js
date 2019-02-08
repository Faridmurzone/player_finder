import { combineReducers } from 'redux';
import { players, playersHasErrored, playersIsLoading, searchPlayers } from './players';

export default combineReducers({
    players,
    playersHasErrored,
    playersIsLoading,
    searchPlayers
});
