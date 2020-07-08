import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/index';
import {rootSaga} from '../sagas/index';

// Khởi tạo Saga MiddleWare
const sagaMiddleware = createSagaMiddleware();

// Khơi tạo store Redux và applySagaMiddleWare
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);

// phải có lệnh này để chạy Saga
// rootSaga sẽ chứa các Saga sẽ chạy
sagaMiddleware.run(rootSaga);

// Exports
export {store};
