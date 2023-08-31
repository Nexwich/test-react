import { Provider } from 'react-redux';
import { store } from './app/main';
import Logs from './ui/Logs.jsx';
import './App.css';
import { DataTemp, SetTemp } from './thermal-temperatures/main';
import React from 'react';

function App () {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Application</h1>

        <SetTemp />
        <DataTemp />

        <Logs />
      </div>
    </Provider>
  );
}

export default App;
