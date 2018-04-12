import React, { Component } from 'react';

// import Components
// import LandingPage from './LandingPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EditUser from './edit-user/EditUser';
import TodoList from './todo-list/TodoList';



export default class Main extends Component {

  render() {
    return (
      <div className="main">
        {/*<LandingPage />*/}
        {/*<UserDetailsPage />*/}
        <TodoList />
        {/*<UserDetailsPage />*/}
        <MuiThemeProvider>
          <EditUser />
        </MuiThemeProvider>
      </div>
    )
  }
};