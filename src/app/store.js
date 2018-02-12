import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga'
import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer } from 'react-router-redux';


import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import tracks from "./reducers/trackReducer";
import filter from "./reducers/filterReducer";
import setAlarm from './reducers/setAlarm';

import mySaga from './saga/sagas'


const sagaMiddleware = createSagaMiddleware()


export default createStore(
  combineReducers({  
  	routing: routerReducer, 
  	math, 
  	user, 
  	tracks, 
  	filter, 
  	setAlarm }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);