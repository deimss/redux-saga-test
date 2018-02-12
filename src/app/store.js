import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import tracks from "./reducers/trackReducer";
import filter from "./reducers/filterReducer";

export default createStore(
  combineReducers({ math, user, tracks,filter }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger)
);
