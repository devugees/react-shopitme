import React, { Component } from 'react';

// import Components
// import LandingPage from './LandingPage';
import UserDetailsPage from './UserDetailsPage';
import TodoList from './todo-list/TodoList';


export default class Main extends Component {

  render() {
    return (
      <div className="main">
        {/*<LandingPage />*/}
        {/*<UserDetailsPage />*/}
        <TodoList />
      </div>
    )
  }
};