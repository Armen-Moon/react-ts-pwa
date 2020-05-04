import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test';
import { version } from '../package.json';

function App() {

  console.log('version =>', version);

  return (
    <Test />
  );
}

export default App;
