import {combineReducers} from 'redux';

import counterReducer from './counterReducer';

// Cũng tạo Reducer combine như bình thường.
const rootReducer = combineReducers({
  counter: counterReducer,
  // abc: abcReducer,
});

export default rootReducer;
