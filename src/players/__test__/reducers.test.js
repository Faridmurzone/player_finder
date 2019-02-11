import { playersHasErrored, playersIsLoading, players, searchPlayers } from '../../store/reducers/players';
import * as actions from '../../store/actions';
// import * as selectors from '../../store/selectors';
import rootReducer from '../../store/reducers';
import configureStore from 'redux-mock-store';
import { createStore } from 'redux';
import expect from 'expect';

// Actions and Reducers
describe('Test actions and reducers', () => {

  // Test actions
  test('Dispatches the correct action and payload for each action', () => {
    const mockStore = configureStore();
    const store = mockStore();
    const expectedActions = [
      {
        'players': 1,
        'type': 'PLAYERS_FETCH_DATA_SUCCESS',
      },
      {
        'hasErrored': true,
        'type': 'PLAYERS_HAS_ERRORED'
      },
      {
        'isLoading': false,
        'type': 'PLAYERS_IS_LOADING'
      }
    ]
    store.dispatch(actions.playersFetchDataSuccess(1))
    store.dispatch(actions.playersHasErrored(true))
    store.dispatch(actions.playersIsLoading(false))
    expect(store.getActions()).toEqual(expectedActions)
  })

  // Test expected initial state with empty players/search and error/loading handlers false.
  it('-> PLAYERS_HAS_ERRORED should be false by default', () => {
    expect(playersHasErrored(undefined, {})).toBeFalsy()
  })
  it('-> PLAYERS_IS_LOADING should be false by default', () => {
    expect(playersIsLoading(undefined, {})).toBeFalsy()
  })
  it('-> SEARCH_PLAYERS is and object of empty values by default...', () => {
    expect(searchPlayers(undefined, {})).toEqual({"age": "", "name": "", "position": ""})
  })
  it('-> Players should be empty array by default', () => {
    expect(players(undefined, {})).toEqual([])
  }) 

  // Test switch action.type and modify state from combineReducers
  let store = createStore(rootReducer)
  it('-> PLAYERS_HAS_ERRORED', () => {
    let PLAYERS_HAS_ERRORED = { type: 'PLAYERS_HAS_ERRORED', hasErrored: false }
    store.dispatch(PLAYERS_HAS_ERRORED)
    expect(store.getState().playersHasErrored).toBeFalsy()
  })
  it('-> PLAYERS_IS_LOADING', () => {
    let PLAYERS_IS_LOADING = { type: 'PLAYERS_IS_LOADING', isLoading: false }
    store.dispatch(PLAYERS_IS_LOADING)
    expect(store.getState().playersIsLoading).toBeFalsy()
  })
  it('-> SEARCH_PLAYER', () => {
    let SEARCH_PLAYER = { type: 'SEARCH_PLAYER', payload: {age: "25", name: "lukaku", position: "Centre-Forward"} }
    store.dispatch(SEARCH_PLAYER)
    expect(store.getState().searchPlayers).toEqual({"age": "25", "name": "lukaku", "position": "Centre-Forward"})
  })
  it('-> PLAYERS_FETCH_DATA_SUCCESS', () => {
    let PLAYERS_FETCH_DATA_SUCCESS = { type: 'PLAYERS_FETCH_DATA_SUCCESS', players: [] }
    store.dispatch(PLAYERS_FETCH_DATA_SUCCESS)
    expect(store.getState().players).toEqual([])
  })

})