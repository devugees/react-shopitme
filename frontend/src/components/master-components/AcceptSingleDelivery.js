import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'
import TodoList from '../todo-list/TodoList';
import ShoppingListTitle from '../shopping-list-title/ShoppingListTitle';
import ShowDeliveryDetails from '../show-delivery-details/ShowDeliveryDetails';
import ConfirmationMessage from '../confirmation-message';
import Notes from '../Additional-Notes/Notes';
import { authCrudAPI } from '../../helpers/helpers';
import GoogleMap from '../map/Map';
import { createdate } from '../../helpers/helpers'

export default class AcceptSingleDelivery extends Component {
  state = {
    openConfirmationMessage: false,
    dataToConfirmationMessage:'',
    order: {
      orderID : this.props.orderID,
      accepted: createdate
    }
  }

  AcceptDeliveryHandler = () => {
    authCrudAPI('PUT','/user/AcceptShoppingList', this.state.order)
      .then(data => {
        if(!data.error){
          this.openConfirmationMessage(data.message)
        } else {
          this.openConfirmationMessage(data.error)
        }
      })
      .catch(error => console.log(error));
  }

  openConfirmationMessage = dataToConfirmationMessage => {
    this.setState({
      openConfirmationMessage:true,
      dataToConfirmationMessage
    })
  }

  closeConfirmationMessage  = () => {
    this.setState({
      openConfirmationMessage:false,
      dataToConfirmationMessage:''},
      window.location.replace('/orderdeliveryhistory?false')
    )
  }

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
          listName={this.props.listName}
          listId={this.props.listId}
          ordername={this.props.ordername}
          createdate={this.props.createdate}
        />
        <ShowDeliveryDetails
          deliveringTime={this.props.deliveringTime}
          deliverAdress={this.props.deliverAdress}
          shop={this.props.shop}
        />
        <TodoList
          items={this.props.items}
          checkingPerson={true}
        />
        <Notes notes={this.props.notes}/>
        <GoogleMap markers={[this.props.orderer.coords]}/>
        <div class="buttons">
          <Button onClick={this.props.goback} style={style} variant="raised" color="secondary">Cancel</Button>
          <Button style={style} onClick={this.AcceptDeliveryHandler} variant="raised" color="primary">
          Accept
          </Button>
        </div>
        <ConfirmationMessage
            openConfirmationMessage={this.state.openConfirmationMessage}
            dataToConfirmationMessage={this.state.dataToConfirmationMessage}
            closeConfirmationMessage={this.closeConfirmationMessage}
          />
      </div>
    )
  }
};