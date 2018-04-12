import React, { Component } from 'react';

// import Components
// import LandingPage from './LandingPage';
// import UserDetailsPage from './UserDetailsPage';
import Map from './map/Map';
// import Location from './map/Location'


export default class Main extends Component {

  render() {
    return (
      <div className="main">
        { /*<LandingPage />*/}
        { /*<UserDetailsPage /> */ }
        <Map />
       {/*<Location /> */ }
      </div>
    )
  }
};