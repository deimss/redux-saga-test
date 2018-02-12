import { render } from "react-dom";
import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { Router, Route, hashHistory } from 'react-router'

import PageOne from './components/otherPage'

import App from "./containers/App";
import store from "./store";

import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
  	<Router history={history}>
  		<Route path="/" component={App}/>
  		<Route path="other" component={PageOne} />
  	</Router>
  </Provider>,
  window.document.getElementById("app")
);

store.subscribe(() => {
  console.log("Subscribe", store.getState());
})