import React, { Component } from 'react';

// import Components
// import LandingPage from './LandingPage';
// import UserDetailsPage from './UserDetailsPage';
import EditUser from './edit-user/EditUser';



export default class Main extends Component {

  render() {
    return (
      <div className="main">
        {/*<LandingPage />*/}
        {/*<UserDetailsPage />*/}
          <EditUser />
      </div>
    )
  }
};