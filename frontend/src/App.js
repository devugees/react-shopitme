import React, { Component } from 'react';

// import Router
import Router from './components/Router/Router'

// CSS imports
import './App.css';

// import Components
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        { /*<Main />*/}
        <Router />
      </React.Fragment>
    );
  }
}

export default App;
