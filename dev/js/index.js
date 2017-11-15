import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'; //Imports just the createStore function from redux
import allReducers from './reducers'; //Imports all Reducers
import App from './components/App';
import dataService from './dataService';

const store = createStore(allReducers, applyMiddleware(dataService));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

store.dispatch({type: 'GET_ARTICLE_DATA'});