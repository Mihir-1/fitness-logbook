import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <Button variant="outlineed">Buttonnnn</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>A simple React app.....</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form action="../../post" method="post" className="form">
          <button type="submit">Connected?</button>
        </form>
      </header>
    </div>
  );
}

export default App;