import {
    applyMiddleware,
    createStore
} from "redux";
import thunk from 'redux-thunk';
import reducer from './reducer'

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))