import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middlewares = [thunk];

export const store = createStore(
  reducers(),
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
);