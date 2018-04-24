import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
//import fake store
import fakeStore from '../../fakeStore';
// import children components
import OrderHistory from './orderHistory';

export default class OrderDeliveryHistory extends Component {

orderMoreInfo = index => {
  console.log('more info pressed')
  const order = [...this.props.orderHistory];
  const selectedOrder= order[index];
  console.log('order props',selectedOrder);
}
  render() {

    return (
      <div className="order-delivery-history" >
        <h1>Order History</h1>
       {this.props.orderHistory.map((orderHistory, index)=> <OrderHistory orderHistory={orderHistory} orderMoreInfo={()=> {this.orderMoreInfo(index)}}/>)}
      </div>
      )
  }
};