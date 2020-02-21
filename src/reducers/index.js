import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'

import reducer from "./reducers.js";

const logger = createLogger({});

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

export default store;
