import React, { Component } from 'react';

import TodoList from '../todo-list/TodoList';
import ShoppingListTitle from '../shopping-list-title/ShoppingListTitle';
import Notes from '../Additional-Notes/Notes';
import Button from 'material-ui/Button';
import Details from '../Details/Details'

export default class CreateShoppingList extends Component {

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
      location:'Sonnenalle 123 12054 Berlin',
    }
    
    
      render() {
        return (
          <div className="createShoppingList">
            <ShoppingListTitle  listName="Shopping List" listId={this.state.listId} checkingPerson={false} />
            <TodoList orderPerson={true}  items={this.state.items}/>
            <Details location = {this.state.location}/>
            <Notes />
      <Button  variant="raised" color="secondary">
        <a href="/sure">Delete </a>
      </Button>
      <Button  variant="raised" color="primary">
        <a href="/acceptsingledelivery">Send</a>
      </Button>
      
    </div>
        )
      }
    };