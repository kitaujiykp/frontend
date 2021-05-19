import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import listReducer from '../features/list/listSlice';

const preloadedState = {
  list: {
    name: 'kumiko',
    school: 'kitauji',
  }
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    list: listReducer,
  },
  devTools: true,
  preloadedState: preloadedState
});