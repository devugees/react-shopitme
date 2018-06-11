import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'
import TodoList from '../todo-list/TodoList';
import ShoppingListTitle from '../shopping-list-title/ShoppingListTitle';
import ShowDeliveryDetails from '../show-delivery-details/ShowDeliveryDetails';
import Notes from '../Additional-Notes/Notes';
import Map from '../map/Map';
//import fake store
import fakeStore from '../../fakeStore';

export default class AcceptedDelivery extends Component {

state = {...fakeStore}


  render() {
    const style = {
      margin: '1rem 0.5rem 0 0.5rem',
    }
    
    return (
        <div className="accept-single-delivery main">
          <ShoppingListTitle
              shopperPerson={true}
              ordererName={this.state.orderer.firstname}
              ordererAccountPage={this.state.orderer.accountPage}
              listName={this.props.progressOrder.ordername}
              listId={this.props.progressOrder.orderID}
              createdate={this.state.created}
              shopperName={this.state.shopper.firstname}
              shopperAccountPage={this.state.shopper.accountPage}
            />
          <ShowDeliveryDetails
              deliveringTime={this.state.deliveringTime}
              deliverAdress={this.state.orderer.deliverAdress}
            />
          <TodoList items={this.props.progressOrder.items} shopperPerson={true}/>
          <Notes notes={this.props.progressOrder.notes}/>
          <Map markers={[this.state.orderer.coords]}/>
          <Button style={style} variant="raised" color="secondary">
            <Link to="">Report Issue</Link>
          </Button>
          <Button style={style} variant="raised" color="primary">
            <Link to="/">Delivered</Link>
          </Button>
        </div>
    )
  }
};