import React, { Component } from 'react';
import logo from './logo.svg';

// CSS imports
import Button from 'material-ui/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Our project</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="raised" color="primary">
          Material Button
        </Button>
      </div>
    );
  }
}

export default App;
