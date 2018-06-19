import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'
import TodoList from '../todo-list/TodoList';
import ShoppingListTitle from '../shopping-list-title/ShoppingListTitle';
import ShowDeliveryDetails from '../show-delivery-details/ShowDeliveryDetails';
import Notes from '../Additional-Notes/Notes';
import Map from '../map/Map';
import { authCrudAPI } from '../../helpers/helpers';
import ConfirmationMessage from '../confirmation-message';
import { createdate } from '../../helpers/helpers'

//import fake store
import fakeStore from '../../fakeStore';

export default class AcceptedDelivery extends Component {

state = {...fakeStore,
  openConfirmationMessage: false,
  dataToConfirmationMessage:'',
  order: {
      orderID : this.props.orderID,
      delivered: createdate

    }
}

  DeliveredDeliveryHandler = () => {
    authCrudAPI('PUT','/user/DeliveredShoppingList', this.state.order)
      .then(data => {
        if(!data.err){
          this.openConfirmationMessage(data.message)
        } else {
          this.openConfirmationMessage(data.err)
        }
      })
    .catch(error => console.log(error));
  }

  openConfirmationMessage = dataToConfirmationMessage => {
    this.setState({openConfirmationMessage:true, dataToConfirmationMessage})
  }

  closeConfirmationMessage  = () => {
    this.setState({openConfirmationMessage:false, dataToConfirmationMessage:''},window.history.back())
  }

  render() {
    const style = {
      margin: '1rem 0.5rem 0 0.5rem',
    }
    return (

        <div className="accept-single-delivery main">
          <ShoppingListTitle
              shopperPerson={true}
              ordererName={this.props.progressOrder.orderer.firstname}
              ordererAccountPage={this.props.progressOrder.orderer.accountPage}
              listName={this.props.progressOrder.ordername}
              listId={this.props.progressOrder.orderID}
              createdate={this.props.progressOrder.createdate}
              shopperName={this.state.shopper.firstname}
              shopperAccountPage={this.state.shopper.accountPage}
            />
          <ShowDeliveryDetails
              deliveringTime={this.props.progressOrder.deliveringTime}
              deliverAdress={this.props.progressOrder.deliverAdress}
              shop={this.props.progressOrder.shop}
            />
          <TodoList
              items={this.props.progressOrder.items}
              shopperPerson={true}
            />
          <Notes notes={this.props.progressOrder.notes}/>
          <Map markers={[this.state.orderer.coords]}/>
          <Button style={style} variant="raised" color="secondary">
            <Link to="">Report Issue</Link>
          </Button>
          <Button onClick={this.DeliveredDeliveryHandler} style={style} variant="raised" color="primary">
            Delivered
          </Button>
           <ConfirmationMessage
            openConfirmationMessage={this.state.openConfirmationMessage}
            dataToConfirmationMessage={this.state.dataToConfirmationMessage}
            closeConfirmationMessage={this.closeConfirmationMessage}
          />
        </div>
    )
  }
};