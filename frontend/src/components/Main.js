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
import CreateShoppingList from './master-components/CreateShoppingList'




export default class Main extends Component {

state = {
  listId: 3323,
  shopper:{
    name: 'Alice Doe',
    accountPage: 'user323223'
  },
  orderer:{
    name: 'Bob Doe',
    accountPage: 'user324332',
    coords:{
      lat: 52.522955,
      lng: 13.477175,
    },
  },
  items:
  [{
    status:"box",
    todo:"2x Corn Bread"
  },{
    status:"box",
    todo:"Kellogs AllBran"
  },{
    status:"box",
    todo:"4x Milk 3.8% Fet"
  },{
    status:"box",
    todo:"2x Orange Juice low sugar"
  }
  ]
}

  render() {
    return (
      <div className="main">
        {/*<ImageCropper />*/}
        {/*<RatingStars />*/}
        {/*<Map />*/}
        {/*<LandingPage />*/}       
        {/*<ShoppingListTitle checkingPerson={true} shopperName={this.state.shopper.name} shopperAccountPage={this.state.shopper.accountPage} ordererName={this.state.orderer.name} ordererAccountPage={this.state.orderer.accountPage} listName="Shopping List" listId={this.state.listId}/>
        <TodoList orderPerson={true} checkingPerson={false} shopperPerson={false} items={this.state.items}/>
        {/*<EditUser />*/}
       {/*<Notes />
       <Details />*/}
      <CreateShoppingList />
      </div>
    )
  }
};