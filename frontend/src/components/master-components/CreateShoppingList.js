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

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const timeHours = date.getHours();
let timeMin = date.getMinutes();
const zeroMonth = (month > 9) ? (month) : ('0' + month);
const zeroMin = (timeMin > 9) ? (timeMin) : ('0' + timeMin);
const zeroDay = (day > 9) ? (day) : ('0' + day);

export default class CreateShoppingList extends Component {

    state = {...fakeStore}

    
      render() {
      const style = {
        margin: '1rem 0.5rem 0 0.5rem',
      }
        return (
          <div className="createShoppingList main">
            <ShoppingListTitle 
                listId={this.props.editing ? this.props.editOrder.orderID : this.state.listId} checkingPerson={false}
                creatingDate={this.props.editing ? this.props.editOrder.created : `${zeroDay}/${zeroMonth}/${year} ${timeHours}:${zeroMin}`}
            />
            <TodoList orderPerson={true}  items={this.props.editing ? this.props.editOrder.items : this.state.items}/>
            <Details
                start={this.props.editing ? this.props.editOrder.deliveringTime.start : ''}
                end={this.props.editing ? this.props.editOrder.deliveringTime.end : ''}
                shop={this.props.editing ? this.props.editOrder.shop : this.state.shop}
                deliverAdress={this.props.editing ? {...this.props.editOrder.deliverAdress} : {...this.state.deliverAdress} }
            />
            <Notes noteText={this.props.editing ? this.props.editOrder.notes : ''}/>
            <Button style={style} variant="raised" color="secondary" onClick={(e) => this.sure.setState({open: true})}>
              Delete
            </Button>
            <Button style={style} variant="raised" color="primary">
              <Link to="/">{this.props.editing ? 'Update' : 'Create'}</Link>
            </Button>
            <Sure ref={(ref) => this.sure = ref} open={this.state.open}/>
          </div>
        )
      }
    };