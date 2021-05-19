import { combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import {reducer} from '../reducer'

const rootReducer = combineReducers({
  count: reducer
})

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware()
    // other store enhancers if any
  )
);

export default store;