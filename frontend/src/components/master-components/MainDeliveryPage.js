import React, { Component } from 'react';
import DeliveryList from '../main-delivery-page'
//import fake store
import fakeStore from '../../fakeStore';

export default class MainDeliveryPage extends Component {

state = {...fakeStore}

  render(){
    return(
        <DeliveryList store={this.state}/>
      )
  }

}