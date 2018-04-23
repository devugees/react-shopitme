import React, { Component } from 'react';

import Button from 'material-ui/Button'
import TodoList from '../todo-list/TodoList';
import ShoppingListTitle from '../shopping-list-title/ShoppingListTitle';
import ShowDeliveryDetails from '../show-delivery-details/ShowDeliveryDetails';
import Notes from '../Additional-Notes/Notes';
import Map from '../map/Map';
//import fake store
import fakeStore from '../../fakeStore';

export default class AcceptSingleDelivery extends Component {

state = {...fakeStore}


  render() {
    return (
      <div className="accept-single-delivery main">
        <ShoppingListTitle checkingPerson={true} ordererName={this.state.orderer.firstname} ordererAccountPage={this.state.orderer.accountPage} listName="Shopping List" listId={this.state.listId}/>
        <ShowDeliveryDetails deliveringTime={this.state.deliveringTime} deliverAdress={this.state.orderer.deliverAdress}/>
        <TodoList items={this.state.items} checkingPerson={true}/>
        <Notes notes={this.state.notes}/>
        <Map lat0={this.state.orderer.coords.lat} lng0={this.state.orderer.coords.lng}/>
        <Button  variant="raised" color="secondary">
        <a href="/">Cancel</a>
      </Button>
      <Button  variant="raised" color="primary">
        <a href="/accepteddelivery">Accept</a>
      </Button>
      </div>
    )
  }
};