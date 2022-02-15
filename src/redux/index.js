import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import combineReducers from "./reducers/combineReducers";
import getFeedDataListener from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(getFeedDataListener);