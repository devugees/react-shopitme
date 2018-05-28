import React, { Component } from 'react';
import DeliveryList from '../main-delivery-page'
//import fake store
import {Store} from '../../fakeStore';

export default class MainDeliveryPage extends Component {

  render(){
    return(
      <Store.Consumer>
      {data =>(<DeliveryList data={data} store={data.store}/>)}
      </Store.Consumer>
      )
  }

}
