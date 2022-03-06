import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const middlewares = [sagaMiddleware, logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
