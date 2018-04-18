import React, { Component } from 'react';

import TodoList from '../todo-list/TodoList';
import ShoppingListTitle from '../shopping-list-title/ShoppingListTitle';
import ShowDeliveryDetails from '../show-delivery-details/ShowDeliveryDetails';
import Notes from '../Additional-Notes/Notes';
import Map from '../map/Map';


export default class AcceptSingleDelivery extends Component {

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
    deliverAdress:{
      street: 'Sonnenallee',
      number: '154',
      postalCode: '12055',
      city: 'Berlin'
    },
  },
  deliveringTime:{
    start: '14:00',
    end:'16:00'
  },
  items:
  [{
    status:'box',
    todo:"2x Corn Bread"
  },{
    status:'box',
    todo:"Kellogs AllBran"
  },{
    status:'box',
    todo:"4x Milk 3.8% Fet"
  },{
    status:'box',
    todo:"2x Orange Juice low sugar"
  }
  ],
  notes:'Bring me all in a box please. Thank you',
}


  render() {
    return (
      <div className="accept-single-delivery main">
        <ShoppingListTitle checkingPerson={true} ordererName={this.state.orderer.name} ordererAccountPage={this.state.orderer.accountPage} listName="Shopping List" listId={this.state.listId}/>
        <ShowDeliveryDetails deliveringTime={this.state.deliveringTime} deliverAdress={this.state.orderer.deliverAdress}/>
        <TodoList items={this.state.items} checkingPerson={true}/>
        <Notes notes={this.state.notes}/>
        <Map lat0={this.state.orderer.coords.lat} lng0={this.state.orderer.coords.lng}/>
      </div>
    )
  }
};