import React, {Component} from 'react';
import OrderDelivery from '../order-delivery-history';
import Image from '../avatar/image';
import RatingStars from '../RatingStars';
// import fakeStore from '../../fakeStore';
import defaultPic from '../../pictures/BoB.png';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';

export default class OrderDeliveryHistory extends Component {

  state = {
    orderHistory: '',
    deliverHistory: '',
    isLoading: true,
    userInfo: null
  }

  componentDidMount() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.setState({userInfo: userInfo});
    const userId = userInfo._id

    Promise.all([
      fetch('http://localhost:4000/order/' + userId),
      fetch('http://localhost:4000/deliver/' + userId)
    ]).then(([res1, res2]) => Promise.all([
      res1.json(),
      res2.json()
    ])).then(([order, deliver]) => {
    this.setState({orderHistory: order, deliverHistory: deliver, isLoading: false})
    })
    
  }

  render() {
    let userPicture = defaultPic;
      if (this.state.userInfo && this.state.userInfo.profileImgPath) {
        userPicture = this.state.userInfo.profileImgPath
      }

      if (this.state.isLoading) {
        return (<CircularProgress style={{
          color: purple[500]
        }} thickness={7}/>)
      }

    return (
      <div className="createShoppingList main">
        <Image imgSrc={userPicture}/>
        <RatingStars rating={this.state.userInfo.ratingstars}/>
        <OrderDelivery
          orderHistory={this.state.orderHistory}
          deliverHistory={this.state.deliverHistory}/>
      </div>
    )
  }
}