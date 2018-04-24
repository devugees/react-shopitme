import React, { Component } from 'react';
import OrderDelivery from '../order-delivery-history';
import ImageCropper from '../ImageCropper';
import RatingStars from '../RatingStars';
//import fake store
import fakeStore from '../../fakeStore';

export default class OrderDeliveryHistory extends Component {

  state = {...fakeStore}
  
    render() {
      return (
        <div className="createShoppingList main">
          <ImageCropper />
          <RatingStars />

          <OrderDelivery orderHistory={this.state.orderHistory} deliverHistory={this.state.deliverHistory}/>
        </div>
      )
    }
  };