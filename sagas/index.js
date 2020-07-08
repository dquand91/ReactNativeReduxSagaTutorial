import {all, fork} from 'redux-saga/effects';

import {watchIncreaseCounter, watchDecreaseCounter} from './counterSaga';

// yield là 1 tiền tố của Saga dùng để chạy 1 lệnh nào đó của Saga.
// ở đây minh fmuoosn chạy lệnh "all" của Saga, nên mình dùng yield all
// Hàm rootSaga này để đăng ký 2 cái middleWare tên là:
// watchIncreaseCounter và watchDecreaseCounter
export function* rootSaga() {
  yield all([fork(watchIncreaseCounter), fork(watchDecreaseCounter)]);
}
