import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
//import fake store
import fakeStore from '../../fakeStore';
// import children components
import OrderHistory from './orderHistory';

export default class OrderDeliveryHistory extends Component {

moreInfo = () => {
  console.log('more info pressed')
}
  render() {

    return (
      <div className="order-delivery-history" >
        <h1>Order History</h1>
       {this.props.orderHistory.map((orderHistory, index)=> <OrderHistory orderHistory={orderHistory} moreInfo={()=> {this.moreInfo(index)}}/>)}
      </div>
      )
  }
};