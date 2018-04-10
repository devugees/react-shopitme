import React, { Component } from 'react';

// import Components
import LandingPage from './LandingPage';
import Navbar from './Navbar';


export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <LandingPage />
      </React.Fragment>
    )
  }
};