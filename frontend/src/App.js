import React, { Component } from 'react';

// import Router
import Router from './components/Router/Router'

// CSS imports
import './App.css';

// import Components
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer'
import Modals from './components/Modals/Modals';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        { /*<Main />*/}
        <Router />
        { /*<Modals />*/}
        <Footer />
      </div>
    );
  }
}

export default App;
