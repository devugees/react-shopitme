import React, { Component } from 'react';

// CSS imports
import './App.css';

// import Components
import Main from './components/Main';
import Footer from './components/Footer'
import Modals from './components/Modals';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Modals />
        <Footer />
      </div>
    );
  }
}

export default App;
