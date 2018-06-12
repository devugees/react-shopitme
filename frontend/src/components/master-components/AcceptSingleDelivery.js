import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'
import TodoList from '../todo-list/TodoList';
import ShoppingListTitle from '../shopping-list-title/ShoppingListTitle';
import ShowDeliveryDetails from '../show-delivery-details/ShowDeliveryDetails';
import Notes from '../Additional-Notes/Notes';
import GoogleMap from '../map/Map';

export default class AcceptSingleDelivery extends Component {

  render() {
    const style = {
      margin: '1rem 0.5rem 0 0.5rem',
    }    
    return (
      <div className="accept-single-delivery main">
        <ShoppingListTitle
          checkingPerson={true}
          ordererName={this.props.orderer.firstname}
          ordererAccountPage={this.props.orderer.accountPage}
          listName="Shopping List"
          listId={this.props.listId}
          ordername={this.props.ordername}
          createdate={this.props.createdate}
        />
        <ShowDeliveryDetails
          deliveringTime={this.props.deliveringTime}
          deliverAdress={this.props.deliverAdress}
        />
        <TodoList
          items={this.props.items}
          checkingPerson={true}
        />
        <Notes notes={this.props.notes}/>
        <GoogleMap markers={[this.props.orderer.coords]}/>
        <Button onClick={this.props.goback} style={style} variant="raised" color="secondary">Cancel</Button>
        <Button style={style} variant="raised" color="primary">
          <Link to="/accepteddelivery">Accept</Link>
        </Button>
      </div>
    )
  }
};