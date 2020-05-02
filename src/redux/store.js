import { createStore, applyMiddleware } from 'redux';  //need to install redux
import logger from 'redux-logger';  //for debugging

import rootReducer from './root-reduce';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;
