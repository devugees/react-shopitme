import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'
import TodoList from '../todo-list/TodoList';
import ShoppingListTitle from '../shopping-list-title/ShoppingListTitle';
import ShowDeliveryDetails from '../show-delivery-details/ShowDeliveryDetails';
import Notes from '../Additional-Notes/Notes';
import Map from '../map/Map';
//import fake store
import fakeStore from '../../fakeStore';

export default class AcceptSingleDelivery extends Component {

state = {...fakeStore}


  render(props) {
    console.log(fakeStore);
  
    const style = {
      margin: '1rem 0.5rem 0 0.5rem',
    }
    return (
      <Fragment>
    <ShoppingListTitle checkingPerson={true} ordererName={this.props.order.firstname} ordererAccountPage={this.props.order.accountPage} listName="Shopping List" listId={this.props.order.orderId}/>
    <ShowDeliveryDetails deliveringTime={this.props.order.deliveringTime} deliverAdress={this.props.order.deliverAdress}/>
    <TodoList items={this.props.order.items} checkingPerson={true}/>
    <Notes notes={this.props.order.notes}/>
    <Map lat0={this.props.order.coords.lat}  lng0={this.props.order.coords.lng0}/>
    <Button onClick={this.props.editing} style={style} variant="raised" color="secondary">Cancel</Button>
      <Button style={style} variant="raised" color="primary">
         <Link to="/accepteddelivery">Accept</Link>
       </Button>
     </Fragment>

    )
  }
};