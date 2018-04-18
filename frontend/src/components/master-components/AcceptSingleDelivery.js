import React, { Component } from 'react';

import TodoList from '../todo-list/TodoList';
import ShoppingListTitle from '../shopping-list-title/ShoppingListTitle';
import AdditionalNotes from '../Additional-Notes/Notes';
import Map from '../map/Map';


export default class AcceptSingleDelivery extends Component {

  state = {
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
      <div className="accept-single-delivery">
        <ShoppingListTitle name="" accountPage="user323223" listId="3321"/>
        <TodoList items={this.state.items} checkingPerson={true}/>
        <AdditionalNotes />
        <Map />
      </div>
    )
  }
};