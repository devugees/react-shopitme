import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
// import children components
import OrderHistory from './orderHistory';
import DeliverHistory from './deliverHistory';
//import fake store
import fakeStore from '../../fakeStore';

export default class OrderDeliveryHistory extends Component {

state = {
  view: true
}

orderMoreInfo = index => {
  const order = [...this.props.orderHistory];
  const selectedOrder= order[index];
  console.log('order props',selectedOrder);
}

deliverMoreInfo = index => {
  const deliver = [...this.props.deliverHistory];
  const selectedDeliver= deliver[index];
  console.log('deliver props',selectedDeliver);
}

changeToOrder = () =>{
  this.setState({view: true})
}

changeToDeliver = () =>{
  this.setState({view: false})
}

  render() {
    const styles ={
      button:{
        margin: '1rem 5px 0 5px'
      }
    }
    let whatToRender;
    if(this.state.view){
      whatToRender = (
        <div className="order-delivery-history" > 
        {this.props.orderHistory.map((orderHistory, index)=> <OrderHistory orderHistory={orderHistory} orderMoreInfo={()=> {this.orderMoreInfo(index)}}/>)}
        </div>
      )
    }else {
      whatToRender = (
        <div className="order-delivery-history" >
        {this.props.deliverHistory.map((deliverHistory, index)=> <DeliverHistory deliverHistory={deliverHistory} deliverMoreInfo={()=> {this.deliverMoreInfo(index)}}/>)}
        </div>
      )
    }

    return (
        <React.Fragment>
          <Button style={styles.button} color={(this.state.view)? "primary" : null} variant="raised" onClick={this.changeToOrder}>Order History</Button>
          <Button style={styles.button} color={(this.state.view)? null : "primary"} variant="raised" onClick={this.changeToDeliver}>Deliver History</Button>
          {whatToRender}
        </React.Fragment>
      
      )
  }
};