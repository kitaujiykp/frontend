import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { List } from './features/list/List';
import Extra from './features/extra/Extra'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Extra />
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <List />
      </header>
    </div>
  );
}

export default App;
