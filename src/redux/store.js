import { createStore, applyMiddleware } from 'redux';  //need to install redux
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';  //for debugging

import rootReducer from './root-reduce';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
};

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
