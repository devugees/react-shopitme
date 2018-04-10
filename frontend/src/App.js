import React, { Component } from 'react';

// CSS imports
import './App.css';

// import Components
import Main from './components/Main';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Footer className="footer" />
      </div>
    );
  }
}

export default App;
