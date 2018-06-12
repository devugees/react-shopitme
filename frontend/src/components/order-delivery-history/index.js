import React, {Component} from 'react';
import {Button} from '@material-ui/core';
// import children components
import OrderHistory from './orderHistory';
import DeliverHistory from './deliverHistory';
// import next component fo single view
import SingleOrderHistory from '../single-order-deliver-history/SingleOrderHistory';
import SingleDeliverHistory from '../single-order-deliver-history/SingleDeliverHistory';
import CreateShoppingList from '../master-components/CreateShoppingList';
import AcceptedDelivery from '../master-components/AcceptedDelivery';
// import the store
import {Store} from '../../fakeStore';

export default class OrderDeliveryHistory extends Component {

  state = {
    view: true,
    singleOrder: false,
    singleDeliver: false,
    EditOrder: false,
    inProgressDeliver: false
  }

  orderMoreInfo = index => {
    const order = [...this.props.orderHistory];
    const selectedOrder= order[index];
    if(selectedOrder.status === 'Pending') {
      this.setState({
        singleDeliver: false,
        singleOrder: false,
        EditOrder: true,
        view: 'canceled',
        order: selectedOrder
      })
    } else {
      this.setState({
        singleDeliver: false,
        singleOrder: true,
        EditOrder: false,
        view: 'canceled',
        order: selectedOrder
      })
    }
  }

  deliverMoreInfo = index => {
    const deliver = [...this.props.deliverHistory];
    const selectedDeliver= deliver[index];
    if(selectedDeliver.status === 'In Progress') {
      this.setState({
        singleDeliver: true,
        singleOrder: false,
        EditOrder: false,
        inProgressDeliver: true,
        view: 'canceled',
        order: selectedDeliver
      })
    } else {
      this.setState({
        singleDeliver: true,
        singleOrder: false,
        EditOrder: false,
        inProgressDeliver: false,
        view: 'canceled',
        order: selectedDeliver
      })
    }
  }

  changeToOrder = () =>{
    this.setState({
      view: true,
      singleOrder: false,
      singleDeliver: false,
      EditOrder: false,
      inProgressDeliver: false,
      order:null
    })
  }

  changeToDeliver = () =>{
    this.setState({
      view: false,
      singleDeliver: false,
      singleOrder: false,
      EditOrder: false,
      inProgressDeliver: false,
      order:null
    })
  }

  render() {
    const styles = {
      button: {
        margin: '1rem 5px 0 5px'
      }
    }
    let whatToRender;
    switch (this.state.view) {
      case(true):
        whatToRender = (
          <div className="order-delivery-history">
            {this
              .props
              .orderHistory
              .map((orderHistory, index) => <OrderHistory
                key={index}
                orderHistory={orderHistory}
                orderMoreInfo={() => {
                this.orderMoreInfo(index)
              }}/>)}
          </div>
        )
        break;
      case(false):
        whatToRender = (
          <div className="order-delivery-history">
            {this
            .props
            .DeliverHistory
            .map((deliverHistory, index) => <DeliverHistory
            key={index}
            deliverHistory={deliverHistory} 
            deliverMoreInfo={() => { this.deliverMoreInfo(index) }}/>)}
          </div>
        )
        break;
      default:
        whatToRender = null;
        break;
    }

    let displaySingleHistory;
    if (this.state.singleOrder) {
      displaySingleHistory = (<SingleOrderHistory order={this.state.order}/>)
    }
    if (this.state.singleDeliver) {
      displaySingleHistory = (<SingleDeliverHistory deliver={this.state.order}/>)
    }
    if (this.state.EditOrder) {
      displaySingleHistory = (
        <Store.Consumer>
          {data => (<CreateShoppingList
            updateOrderData={data.updateOrderData}
            editing={true}
            editOrder={this.state.order}/>)}
        </Store.Consumer>
      )
    }
    if(this.state.inProgressDeliver){
      displaySingleHistory = (
        <Store.Consumer>
          {data =>(
            <AcceptedDelivery
              updateOrderData={data.updateOrderData}
              inProgress={true}
              progressOrder={this.state.order}/>
          )}
        </Store.Consumer>
      )
    }

    let orderColorButtonSelector;
    let deliverColorButtonSelector;
    if (this.state.singleDeliver || !this.state.view) {
      orderColorButtonSelector = null;
      deliverColorButtonSelector = 'primary';
    } else if (this.state.singleOrder || this.state.view) {
      orderColorButtonSelector = 'primary';
      deliverColorButtonSelector = null;
    }

    return (
      <React.Fragment>
        <Button
          style={styles.button}
          color={orderColorButtonSelector}
          variant="raised"
          onClick={this.changeToOrder}>Order History</Button>
        <Button
          style={styles.button}
          color={deliverColorButtonSelector}
          variant="raised"
          onClick={this.changeToDeliver}>Deliver History</Button>
        {whatToRender}
        {displaySingleHistory}
      </React.Fragment>
    )
  }
};