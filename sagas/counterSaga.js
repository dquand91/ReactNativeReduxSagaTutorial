import {delay, takeEvery, takeLatest, put} from 'redux-saga/effects';

// Sẽ được chạy khi action INCREASE_COUNTER_TO_SAGA được gọi từ View.
// Tham số đầu vào là action từ View.
function* increaseCounterAsync(action) {
  // ở đây khi nhận action từ View, mình sẽ delay 4 giây.
  // Rồi mới gọi action từ Saga qua Reducer.
  // Tức là khi User bấm nút Cộng => 4 giây sau mới tăng giá trị lên
  try {
    // Delay 4 Seconds
    yield delay(4000);

    // Dùng put để gọi tiếp action qua Reducer
    yield put({
      type: 'INCREASE_COUNTER_FROM_SAGA_TO_REDUCER',
      value: action.value,
    });
  } catch (error) {
    console.log(error);
  }
}

// function này sẽ lắng nghe action từ View
export function* watchIncreaseCounter() {
  // "takeEvery" sẽ thực hiện function "increaseCounterAsync" mỗi khi View gọi action.
  // View gọi action 5 lần liên tục sẽ thực hiện function "increaseCounterAsync" 5 lần.
  // yield takeEvery('INCREASE_COUNTER', increaseCounterAsync);

  // "takeLatest" chỉ thực hiện lần gọi action cuối cùng thôi.
  // View gọi action 5 lần, mà 4 lần đầu tiên chưa chạy xong thì chỉ chạy cái thứ 5 cuối cùng thôi.
  yield takeLatest('INCREASE_COUNTER_FROM_VIEW_TO_SAGA', increaseCounterAsync);
}
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// Tương tự ở trên
function* decreaseCounter(action) {
  try {
    // Delay 4 Seconds
    // yield delay(4000);

    yield put({
      type: 'DECREASE_COUNTER_FROM_SAGA_TO_REDUCER',
      value: action.value,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* watchDecreaseCounter() {
  // yield takeEvery('DECREASE_COUNTER', decreaseCounter);

  // Take Last Action
  yield takeLatest('DECREASE_COUNTER_FROM_VIEW_TO_SAGA', decreaseCounter);
}
