import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Redux
import { Provider } from 'react-redux';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Store
import configureStore from './store/configStore';

const store = configureStore(); // The config is all in ./store/configStore

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root'));

