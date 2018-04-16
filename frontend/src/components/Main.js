import React, { Component } from 'react';

// import Components
// import LandingPage from './LandingPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EditUser from './edit-user/EditUser';
import TodoList from './todo-list/TodoList';
import Map from './map/Map';
import ImageCropper from './ImageCropper';
import RatingStars from './RatingStars';




export default class Main extends Component {

  render() {
    return (
      <div className="main">
        <ImageCropper />
        <RatingStars />
        {/*<Map />*/}
        {/*<LandingPage />*/}
        {/*<UserDetailsPage />*/}
        <TodoList />
        {/*<UserDetailsPage />*/}
        {/*<MuiThemeProvider>
          <EditUser />
        </MuiThemeProvider>*/}
      </div>
    )
  }
};