import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../todo-list/TodoList';
import ShoppingListTitle from '../shopping-list-title/ShoppingListTitle';
import Notes from '../Additional-Notes/Notes';
import {Button} from '@material-ui/core'
import Details from '../Details/Details';
import Sure from '../Modals/Sure';
//import fake store
import fakeStore from '../../fakeStore';

export default class CreateShoppingList extends Component {

    state = {
      ...fakeStore,
      openSureModal:false
    }
    
    openCloseModal = () => {
      this.setState(prevState => {return {openSureModal: !prevState.openSureModal}});
    }

    sendback = () => {
      this.setState({openSureModal: false})
    }

    
      render() {
      const style = {
        margin: '1rem 0.5rem 0 0.5rem',
      }
        return (
          <div className="createShoppingList main">
            <ShoppingListTitle listId={this.state.listId} checkingPerson={false} />
            <TodoList orderPerson={true}  items={this.state.items}/>
            <Details />
            <Notes />
            <Button
              style={style}
              variant="raised"
              color="secondary"
              onClick={this.openCloseModal}
            >
              Delete
            </Button>
            <Button style={style} variant="raised" color="primary">
              <Link to="/">Create</Link>
            </Button>
            <Sure sendback={this.sendback} open={this.state.openSureModal}/>
          </div>
        )
      }
    };