import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
// import children components
import OrderHistory from './orderHistory';
import DeliverHistory from './deliverHistory';
// import next component fo single view
import SingleOrderHistory from '../SingleOrderHistory'
//import fake store
import fakeStore from '../../fakeStore';

export default class OrderDeliveryHistory extends Component {

state = {
  view: true,
  singleOrder: false,
}

orderMoreInfo = index => {
  const order = [...this.props.orderHistory];
  const selectedOrder= order[index];
  console.log('deliver props',selectedOrder);
  this.setState({
    singleOrder: true,
    view: 'canceled',
    order: selectedOrder
  })
}

deliverMoreInfo = index => {
  const deliver = [...this.props.deliverHistory];
  const selectedDeliver= deliver[index];
  console.log('deliver props',selectedDeliver);
}

changeToOrder = () =>{
  this.setState({
    view: true,
    singleOrder: false,
    order:null
  })
}

changeToDeliver = () =>{
  this.setState({
    view: false,
    singleDeliver: false,
    deliver:[]
  })
}

  render() {
    const styles ={
      button:{
        margin: '1rem 5px 0 5px'
      }
    }
    let whatToRender;
    switch(this.state.view)
      {
        case (this.state.view = true):
          whatToRender = (
            <div className="order-delivery-history" > 
            {this.props.orderHistory.map((orderHistory, index)=> <OrderHistory orderHistory={orderHistory} orderMoreInfo={()=> {this.orderMoreInfo(index)}}/>)}
            </div>
          )
          break;
        case (this.state.view = false):
          whatToRender = (
            <div className="order-delivery-history" >
            {this.props.deliverHistory.map((deliverHistory, index)=> <DeliverHistory deliverHistory={deliverHistory} deliverMoreInfo={()=> {this.deliverMoreInfo(index)}}/>)}
            </div>
          )
          break;
        default:
          whatToRender = null;
          break;
      }
    
    let singleOrder;
    if(this.state.singleOrder){
      singleOrder = (<SingleOrderHistory order={this.state.order}/>)
    }

    let orderColorButtonSelector;
    let deliverColorButtonSelector;
    if(this.state.singleOrder || this.state.view){
      orderColorButtonSelector = 'primary';
      deliverColorButtonSelector = null;
    } else {
      orderColorButtonSelector = null;
      deliverColorButtonSelector = 'primary';
    }

    return (
        <React.Fragment>
          <Button style={styles.button} color={orderColorButtonSelector} variant="raised" onClick={this.changeToOrder}>Order History</Button>
          <Button style={styles.button} color={deliverColorButtonSelector} variant="raised" onClick={this.changeToDeliver}>Deliver History</Button>
          {whatToRender}
          {singleOrder}
        </React.Fragment>
      
      )
  }
};