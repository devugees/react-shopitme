import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../todo-list/TodoList';
import ShoppingListTitle from '../shopping-list-title/ShoppingListTitle';
import Notes from '../Additional-Notes/Notes';
import Button from 'material-ui/Button';
import Details from '../Details/Details'
//import fake store
import fakeStore from '../../fakeStore';

export default class CreateShoppingList extends Component {

    state = {...fakeStore}
    
    
      render() {
        return (
          <div className="createShoppingList main">
            <ShoppingListTitle  listName="Shopping List" listId={this.state.listId} checkingPerson={false} />
            <TodoList orderPerson={true}  items={this.state.items}/>
            <Details location = {this.state.location}/>
            <Notes />
      <Button  variant="raised" color="secondary">
        <Link to="/sure">Delete </Link>
      </Button>
      <Button  variant="raised" color="primary">
        <Link to="/acceptsingledelivery">Send</Link>
      </Button>
      
    </div>
        )
      }
    };