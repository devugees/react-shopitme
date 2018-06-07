import React, { Component } from 'react';
import OrderDelivery from '../order-delivery-history';
import Image from '../avatar/image';
import RatingStars from '../RatingStars';
//import fake store
import fakeStore from '../../fakeStore';
import starRed from '../../pictures/BoB.png';

export default class OrderDeliveryHistory extends Component {

  state = {...fakeStore}
 
 /*  state={
    data:'',
    isLoading:true
  } */ 


  componentDidMount(){
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

   const userId = userInfo._id
   
    fetch('http://localhost:4000/users/'+userId)
    .then( response =>{
      return response.json();
    })
    .then(data => {
      console.log(data);
    /*  this.setState({
       data:data,
       isLoading:false
     }) */
    });
  } 
  
    render() {
      return (
        <div className="createShoppingList main">
          <Image imgSrc={starRed}/>
          <RatingStars rating='4'/>
          <OrderDelivery orderHistory={this.state.orderHistory} deliverHistory={this.state.deliverHistory}/>
        </div>
      )
    }
  };