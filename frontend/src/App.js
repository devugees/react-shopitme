import React, { Component } from 'react';

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
      
      <div className="App">
        <Navbar />
        <Main />
        { /*<Modals />*/}
        <Footer />
      </div>
    );
  }
}

export default App;
