import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import reducer from './store/reducers';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// import data from './players/services/fetchPlayers';
    const requestURL = () => {
        return fetch('https://football-players-b31f2.firebaseio.com/players.json?print=pretty')
        .then(results => results.json())
        .then(data => { return data })
        .catch(err => ({err}))
    }

    const data = requestURL().then(response => { return response });

    const initialState = {
        players: {}
    }

    console.log(initialState)
    const store = createStore(
        (state) => state,
        initialState,
        // applyMiddleware(thunk),
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render(
        <Provider store={store}>
        <App />
        </Provider>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
