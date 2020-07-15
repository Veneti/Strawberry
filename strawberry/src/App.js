import React from 'react';
import logo from './logo.svg';
import './App.css';
import Strawberry from './strawberry.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Strawberry} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Strawberry Squad!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Learn React */}
        </a>
      </header>
    </div>
  );
}

export default App;
