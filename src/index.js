import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Redux
import { Provider } from 'react-redux';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Data
import configureStore from './store/configStore';

const store = configureStore(); // The config is all in ./store/configStore

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
