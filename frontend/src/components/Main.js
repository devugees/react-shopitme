import React, { Component } from 'react';

// import Components
import LandingPage from './LandingPage';
import Navbar from './Navbar';
import UserDetailsPage from './UserDetailsPage';


export default class Main extends Component {

  render() {
    return (
        <Navbar />
      <div className="main">
        <LandingPage />
        <UserDetailsPage />
      </div>
    )
  }
};