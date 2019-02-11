import React from 'react';
import {Provider} from 'react-redux';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import App from '../../App';
import Players from '../containers/Players';
import PlayerList from '../components/PlayerList';
import Filters from '../components/Filters';
import {fetchPlayersData} from '../../store/actions';
import configStore from '../../store/configStore';

Enzyme.configure({adapter: new Adapter()})

describe('Test components (both containers and components)', () => {
// Test Players components
  it('Test if PlayerList module renders', () => {
    const results = []
    const isLoading = false
    const hasErrored = false
    const searchPlayers = {"age": "", "name": "", "position": "Centre-Forward"}
    shallow(<Filters />)
    shallow(<PlayerList players={results} isLoading={isLoading} hasErrored={hasErrored} search={searchPlayers} />);
  })

  it('Test if Playeres render with his provider', async () => {
    const store = configStore()
    // const mockStore = configureStore()
    // const store = mockStore()
    const players = mount(
      <Provider store={store}>
        <Filters />
      </Provider>)
    players
      .find('button#search')
      .simulate('click')
    // expect(handleSubmit()).toHaveBeenCalled();
    const getName = await function (state) { state.searchPlayers.name }
    // expect(store.getState().searchedPlayers("Lukaku")).toBe("Lukaku");
    // expect(Selectors.isDataRequested(newState)).toBeTruthy();
    players.unmount()
  })

  // Test Players container
  it('Test if Player module renders', () => {
    shallow(<Players />)
  })
  // Test Players module on the App context
  it('Test if render all without crashing on the App context', () => {
    shallow(<App />)
  })

})

describe('asyncFetch', () => {
  it('can fetch', async () => {
    const response = await fetchPlayersData('https://football-players-b31f2.firebaseio.com/players.json?print=pretty');
  })
})