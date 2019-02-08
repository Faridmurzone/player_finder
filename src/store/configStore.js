import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools (
            applyMiddleware(thunk)
            ) 
    );
}

// const initialState = {
//     data: {
//         ...data,
//     }, 
//     search: []
// }
