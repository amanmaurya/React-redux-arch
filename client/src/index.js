import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import reducer from './reducers';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
window.axios=axios;

const store =createStore(reducer,{},applyMiddleware(reduxThunk))
ReactDom.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root'));

