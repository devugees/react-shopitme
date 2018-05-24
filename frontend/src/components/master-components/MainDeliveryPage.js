import React, { Component } from 'react';
import DeliveryList from '../main-delivery-page'
//import fake store
import {FakeStoreContext} from '../../fakeStore';

export default class MainDeliveryPage extends Component {

  render(){
    return(
      <FakeStoreContext.Consumer>
      {data =>(<DeliveryList data={data} store={data.store}/>)}
      </FakeStoreContext.Consumer>
      )
  }

}
