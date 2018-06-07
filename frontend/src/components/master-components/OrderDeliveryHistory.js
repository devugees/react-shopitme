import React, { Component } from 'react';
import OrderDelivery from '../order-delivery-history';
import Image from '../avatar/image';
import RatingStars from '../RatingStars';
//import fake store
/* import fakeStore from '../../fakeStore';
 */import starRed from '../../pictures/BoB.png';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';

export default class OrderDeliveryHistory extends Component {

/* state = {...fakeStore}
 */ 
  state={
    orderHistory:'',
    isLoading:true
  } 
 

  componentDidMount(){
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))

   const userId = userInfo._id
   
    fetch('http://localhost:4000/users/'+userId)
    .then( response =>{
      return response.json();
    })
    .then(data => {
   this.setState({
    orderHistory:data,
       isLoading:false
     })
    });
  } 
  
    render() {
      if(this.state.isLoading) {
        return ( 
             <CircularProgress style={{ color: purple[500]}} thickness={7} />
    )
      }
      return (
        <div className="createShoppingList main">
          <Image imgSrc={starRed}/>
          <RatingStars rating='4'/>
          <OrderDelivery orderHistory={this.state.orderHistory} DeliverHistory={this.state.DeliverHistory} />
        </div>
      )
    }
  };