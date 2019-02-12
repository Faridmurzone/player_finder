import React from 'react';
import {Provider} from 'react-redux';
import Enzyme, {mount} from 'enzyme';
import Filters from '../components/Filters';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import PlayerList from '../components/PlayerList';
import {fetchPlayersData} from  '../../store/actions'

Enzyme.configure({adapter: new Adapter()})

const setUp = (props={}, loading=false, errored=false) => {
    const mockStore = configureStore()
    const store = mockStore()
    const results = []
    const isLoading = loading
    const hasErrored = errored
    const searchPlayers = {"age": "", "name": "", "position": ""}
    const component = mount(
        <Provider store={store}>
            <Filters />
            <PlayerList players={results} isLoading={isLoading} hasErrored={hasErrored} search={searchPlayers} />
        </Provider>)
    return component;
}
describe('Testing if components render...', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })
    it('testing Filters', () => {
        const wrapper = component.find(`[data-test="filters"]`)
        expect(wrapper.length).toBe(1)
    })
    it('testing PlayerList', () => {
        const wrapper = component.find(`[data-test="player-list"]`)
        expect(wrapper.length).toBe(1)
    })
    it('testing map', () => {
        const mapWrapper = component.find(`[data-test="players-map"]`).map(node => node.text())
        expect(mapWrapper).toEqual([]);
    })
    it('testing submit', () => {
        const form = component.find(`[data-test="submit"]`).first()
        form.simulate('submit')
        const wrapper = component.find(`[data-test="player-list"]`)
        expect(wrapper.length).toBe(1)
    })
})

describe('Testing if components render but isLoading...', () => {
    let component;
    beforeEach(() => {
        component = setUp({}, true, false)
    })
    it('Is Loading...', () => {
        const wrapper = component.find(".loading")
        expect(wrapper.length).toBe(1)
    })
})

describe('Testing if components render but hasErrored...', () => {
    let component;
    beforeEach(() => {
        component = setUp({}, false, true)
    })
    it('has Errored...', () => {
        const wrapper = component.find(".errored")
        expect(wrapper.length).toBe(1)
    })
})