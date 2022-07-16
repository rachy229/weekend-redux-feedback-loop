import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

//reducers
const comments = (state = (''), action) => {
    switch(action.type) {
        case 'ADD_COMMENT':
            return action.payload;
        default:
            return state;
    }

}

const feeling = (state = (''), action) => {
    switch(action.type) {
        case 'ADD_FEELING':
            return action.payload;
        default:
            return state;
    }

}

const supported = (state = (''), action) => {
    switch(action.type) {
        case 'ADD_SUPPORTED':
            return action.payload;
        default:
            return state;
    }

}

const understanding = (state = (''), action) => {
    switch(action.type) {
        case 'ADD_UNDERSTANDING':
            return action.payload;
        default:
            return state;
    }

}


//store
const storeInstance = createStore(
    combineReducers({
        comments,
        feeling,
        supported,
        understanding
    }),
    applyMiddleware(logger)
);


ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
