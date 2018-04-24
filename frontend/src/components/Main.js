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
import OrderDeliveryHistory from './master-components/OrderDeliveryHistory'
import CreateShoppingList from './master-components/CreateShoppingList'
import SingleOrderHistory from './single-order-deliver-history/SingleOrderHistory';
import SingleDeliverHistory from './single-order-deliver-history/SingleDeliverHistory';

//import fake store
import fakeStore from '../fakeStore';




export default class Main extends Component {

state = {...fakeStore}

  render() {
    return (
      <div className="main">
       <SingleOrderHistory order={this.state.orderHistory[3]}/>
       {/*<SingleDeliverHistory order={this.state.orderHistory[3]}/>

        {/*<OrderDeliveryHistory />*/}
        {<OrderDeliveryHistory orderView={false} orderHistory={this.state.orderHistory} deliverHistory={this.state.deliverHistory}/>}
        {/*<ImageCropper />*/}
        {/*<RatingStars />*/}
        {/*<Map />*/}
        {/*<LandingPage /> */}      
        {/*<ShoppingListTitle checkingPerson={true} shopperName={this.state.shopper.name} shopperAccountPage={this.state.shopper.accountPage} ordererName={this.state.orderer.name} ordererAccountPage={this.state.orderer.accountPage} listName="Shopping List" listId={this.state.listId}/>*/}
        {/*<TodoList orderPerson={true} checkingPerson={false} shopperPerson={false} items={this.state.items}/>*/}
        {/*<EditUser />*/}
       {/*<Notes />*/}
       {/*<Details />*/}
      {/*<CreateShoppingList />*/}
      </div>
    )
  }
};