import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <ShoppingListTitle shopperPerson={true} ordererName={this.state.orderer.firstname} ordererAccountPage={this.state.orderer.accountPage} listName="Shopping List" listId={this.state.listId} shopperName={this.state.shopper.firstname} shopperAccountPage={this.state.shopper.accountPage}/>
        <ShowDeliveryDetails deliveringTime={this.state.deliveringTime} deliverAdress={this.state.orderer.deliverAdress}/>
        <TodoList items={this.state.items} shopperPerson={true}/>
        <Notes notes={this.state.notes}/>
        <Map lat0={this.state.orderer.coords.lat} lng0={this.state.orderer.coords.lng}/>
        <Button  variant="raised" color="secondary">
        <Link to="">Report Issue</Link>
      </Button>
      <Button  variant="raised" color="primary">
        <Link to="/">Delivered</Link>
      </Button>
      </div>
    )
  }
};