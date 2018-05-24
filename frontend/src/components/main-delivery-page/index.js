import React, { Component } from 'react';
import DeliveryList from './deliveryList'
import Map from '../map/Map';
import AcceptSingleDelivery from '../master-components/AcceptSingleDelivery'

export default class ShoppingDeliveryLists extends Component {

state = {
  coords:[],
  orders:[],
  order: null,
  loadSingleView: false,
}

componentDidMount(){
  this.props.store.fakeDeliverAdresses.map(data => {
    return(
      this.setState( prevState => {return {
          coords: [...prevState.coords, data.orderer.coords],
          orders: [...prevState.orders, data]
      }})
      )
  })
  }

  deliverMoreInfo = index => {
    const deliver = [...this.state.orders];
    const selectedDeliver= deliver[index];
    this.setState({
      loadSingleView: true,
      order: selectedDeliver
    })
  }
  goback = () => {
    this.setState({loadSingleView: false})
  }

  render(){
    console.log(this.props.data)
    let whatToRender = (
      <React.Fragment>
        <h1>Shopping Lists in your Area</h1>
        <button onClick={()=>{this.props.data.updateStore('HERE COMES DATA!')}}>click</button>
        <Map deliveryList={true} markers={this.state.coords}/>
        {this.state.orders.map((order, index) => <DeliveryList key={index} order={order} deliverMoreInfo={()=> {this.deliverMoreInfo(index)}}/>)}
      </React.Fragment>)
    if(this.state.loadSingleView) {
      whatToRender = (
        <AcceptSingleDelivery goback={()=>{this.goback()}} orderer={this.state.order.orderer} deliveringTime={this.state.order.deliveringTime} items={this.state.order.items}/>
        )
    }

    return(
      <React.Fragment>
        {whatToRender}
      </React.Fragment>
      )
  }

}
