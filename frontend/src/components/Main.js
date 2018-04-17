import React, { Component } from 'react';

// import Components
import LandingPage from './LandingPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EditUser from './edit-user/EditUser';
import TodoList from './todo-list/TodoList';
import ShoppingListTitle from './shopping-list-title/ShoppingListTitle';
import Map from './map/Map';
import ImageCropper from './ImageCropper';
import RatingStars from './RatingStars';
import Notes from './Additional-Notes/Notes'




export default class Main extends Component {

  render() {
    return (
      <div className="main">
        {/*<ImageCropper />*/}
        {/*<RatingStars />*/}
        {/*<Map />*/}
        {/*<LandingPage />*/}       
        <ShoppingListTitle name="Alice Doe" accountPage="user323223" listId="3321"/>
        <TodoList />
        {/*<EditUser />*/}
        {/*<Notes />*/}
      </div>
    )
  }
};