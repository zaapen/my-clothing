import { createStore, applyMiddleware } from 'redux'; //need to install redux
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'; //for debugging
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reduce';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
