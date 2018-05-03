import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button'
import TodoList from '../../todo-list/TodoList';
import ShoppingListTitle from '../../shopping-list-title/ShoppingListTitle';
import ShowDeliveryDetails from '../../show-delivery-details/ShowDeliveryDetails';
import Notes from '../../Additional-Notes/Notes';
import Map from '../../map/Map';
//import fake store
import fakeStore from '../../../fakeStore';

export default class AcceptSingleDelivery extends Component {

state = {...fakeStore}


  render(props) {
    console.log(fakeStore);
  
    const style = {
      margin: '1rem 0.5rem 0 0.5rem',
    }
    return (
      <Fragment>
        <ShoppingListTitle checkingPerson={true} ordererName={this.props.firstname} ordererAccountPage={this.props.accountPage} listName="Shopping List" listId={this.props.listId}/>
        <ShowDeliveryDetails deliveringTime={props.deliveringTime} deliverAdress={this.props.deliverAdress}/>
        <TodoList items={this.props.items} checkingPerson={true}/>
        <Notes notes={this.props.notes}/>
        <Map lat0={this.props.coords.lat} lng0={this.props.coords.lng}/>
        <Button  style={style} variant="raised" color="secondary">
        <Link to="/">Cancel</Link>
      </Button>
      <Button  style={style} variant="raised" color="primary">
        <Link to="/accepteddelivery">Accept</Link>
      </Button>
     </Fragment>

    )
  }
};