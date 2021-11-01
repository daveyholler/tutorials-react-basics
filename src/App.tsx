import React from 'react';
import './App.css';
import { Greeting } from './components/greeting';

function App() {
  return (
    <div className="App">
      <Greeting name="Danny Boy" />
      <Greeting name="Danny Boy" isArriving />
    </div>
  );
}

export default App;
