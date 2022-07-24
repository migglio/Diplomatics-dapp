import './App.css';
import React from 'react';
import { Header } from '../Header';
import { FirstBox } from  '../FirstBox';
import { Step2 } from '../Step2';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstBox />
      <Step2 />
    </div>
  );
}

export { App };
