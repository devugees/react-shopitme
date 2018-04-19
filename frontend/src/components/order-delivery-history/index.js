import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
//import fake store
import fakeStore from '../../fakeStore';
// import children components
import orderHistory from './orderHistory';

export default class OrderDeliveryHistory extends Component {

state = {...fakeStore}

  render() {

    return (
      <div className="order-delivery-history" >
        <h1>Order History</h1>
       {this.state.orderHistory.map(order => <orderHistory orderID={order.orderID}/>)}
      </div>
      )
  }
};