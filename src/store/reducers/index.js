import { combineReducers } from 'redux';
import { players, playersHasErrored, playersIsLoading } from './players';
export default combineReducers({
    players,
    playersHasErrored,
    playersIsLoading
});