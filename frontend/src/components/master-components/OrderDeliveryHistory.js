import React, { Component } from 'react';
import OrderDelivery from '../order-delivery-history';
import Image from '../avatar/image';
import RatingStars from '../RatingStars';
//import fake store
import fakeStore from '../../fakeStore';
import defaultPic from '../../pictures/BoB.png';

export default class OrderDeliveryHistory extends Component {

  state = {...fakeStore}
  

  
    render() {
      let userPicture = defaultPic;
      if (this.state.userInfo.profileImgPath) {
        userPicture = this.state.userInfo.profileImgPath
      }
      console.log(this.state.userInfo.profileImgPath);
      return (
        <div className="createShoppingList main">
          <Image imgSrc={userPicture}/>
          <RatingStars rating='4'/>
          <OrderDelivery
            orderHistory={this.state.orderHistory}
            deliverHistory={this.state.deliverHistory}
          />
        </div>
      )
    }
  };