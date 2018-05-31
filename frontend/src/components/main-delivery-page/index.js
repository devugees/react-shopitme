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
  console.log('componentDidMount')
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

  highlightMarker = index => {
    const markerToHighlight = [...this.state.coords];
    //
    const orderToHightLight = [...this.state.orders];
    orderToHightLight[index].highlight = true
    console.log(orderToHightLight[index])
    //
    const resertToFalse = markerToHighlight.map(marker => {
      if(marker.highlight) delete marker.highlight
        return(
          marker
        )
      })
    if(markerToHighlight[index].highlight){
      markerToHighlight[index].highlight = false;
    }else {
      markerToHighlight[index].highlight = true;
    }
    this.setState({
      coords: markerToHighlight,
      orders: orderToHightLight
    })
  }

  goback = () => {
    this.setState({loadSingleView: false})
  }

  render(){
    let whatToRender = (
      <React.Fragment>
        <h1>Shopping Lists in your Area</h1>
        <Map deliveryList={true} markers={this.state.coords}/>
        {this.state.orders.map((order, index) => {
          return(
            <DeliveryList
              key={index}
              order={order}
              deliverMoreInfo={()=> {this.deliverMoreInfo(index)}}
              highlightMarker={()=> {this.highlightMarker(index)}}
            />
          )
        })}
      </React.Fragment>)
    if(this.state.loadSingleView) {
      whatToRender = (
        <AcceptSingleDelivery goback={()=>{this.goback()}} orderer={this.state.order.orderer} deliveringTime={this.state.order.deliveringTime} items={this.state.order.items} notes={'this.state.notes'}/>
        )
    }

    return(
      <React.Fragment>
        {whatToRender}
      </React.Fragment>
      )
  }

}
