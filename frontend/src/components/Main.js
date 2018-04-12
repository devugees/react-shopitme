import React, { Component } from 'react';

// import Components
// import LandingPage from './LandingPage';
// import UserDetailsPage from './UserDetailsPage';
import EditUser from './edit-user/EditUser';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export default class Main extends Component {

  render() {
    return (
      <div className="main">
        {/*<LandingPage />*/}
        {/*<UserDetailsPage />*/}
        <MuiThemeProvider>
          <EditUser />
        </MuiThemeProvider>
      </div>
    )
  }
};