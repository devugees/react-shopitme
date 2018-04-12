import React, { Component } from 'react';

// CSS imports
import './App.css';

// import Components
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import ImageCropper from './components/ImageCropper';
import Modals from './components/Modals/Modals.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <Modals />
        <Footer />
        {/*<ImageCropper />*/}
      </div>
    );
  }
}
 
export default App;
