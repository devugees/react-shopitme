import React, { Component } from 'react';
// import Router
import Router from './components/Router/Router'

// CSS imports
import './App.css';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router />
      </React.Fragment>
    );
  }
}
