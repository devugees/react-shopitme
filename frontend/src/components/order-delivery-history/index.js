import React, { Component } from 'react';

export default class OrderDeliveryHistory extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: 'order delivery history'
    }
  }


  render() {

    return (
      <div className="order-delivery-history" >
        <h1>{this.state.name}</h1>
        <p>{this.props.test}</p>
      </div>
      )
  }
};