import React from 'react';
import {Provider} from 'react-redux';

import Counter from './screens/Counter';

import {store} from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
