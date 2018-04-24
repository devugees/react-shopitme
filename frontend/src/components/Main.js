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
import Details from './Details/Details'
import OrderDeliveryHistory from './order-delivery-history'
import CreateShoppingList from './master-components/CreateShoppingList'
import MainDelivery from './master-components/MainDeliveryPage'
//import fake store
import fakeStore from '../fakeStore';




export default class Main extends Component {

state = {...fakeStore}

  render() {
    console.log(this.state)
    return (
      <div className="main">
        {/*<OrderDeliveryHistory />*/}
        {/*<ImageCropper />*/}
        {/*<RatingStars />*/}
        {/*<Map />*/}
        {/*<LandingPage /> */}      
        {/*<ShoppingListTitle checkingPerson={true} shopperName={this.state.shopper.name} shopperAccountPage={this.state.shopper.accountPage} ordererName={this.state.orderer.name} ordererAccountPage={this.state.orderer.accountPage} listName="Shopping List" listId={this.state.listId}/>*/}
        {/*<EditUser />*/}
       {/*<Notes />*/}
       {/*<Details />*/}
     <MainDelivery />
      {/*<CreateShoppingList />*/}
      </div>
    )
  }
};