import React, { Component } from 'react';

// import Router
import Router from './components/Router/Router'

// CSS imports
import './App.css';

// import Components
import Navbar from './components/nav-bar/Navbar';
import Main from './components/Main';
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        { /*<Main />*/}
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
