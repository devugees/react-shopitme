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
  this.props.store.map(data => {

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

  resertToFalse = arrayToReset => {
    arrayToReset.map(marker => {
      if(marker.highlight) delete marker.highlight
      return(
        marker
      )
    })
  }

  toggleHighlight = (item, index) => {
    if(item[index].highlight){
      item[index].highlight = false;
    }else {
      item[index].highlight = true;
    }
  }

  highlightMarker = index => {
    const markerToHighlight = [...this.state.coords];
    const orderToHightLight = [...this.state.orders];

    this.resertToFalse(markerToHighlight)
    this.resertToFalse(orderToHightLight)

    this.toggleHighlight(markerToHighlight, index)
    this.toggleHighlight(orderToHightLight, index)
    
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
              highlight={order.highlight}
            />
          )
        })}
      </React.Fragment>)
    if(this.state.loadSingleView) {
      whatToRender = (
        <AcceptSingleDelivery goback={()=>{this.goback()}} deliverAdress={this.state.order.orderer} orderer={this.state.order.orderer} deliveringTime={this.state.order.deliveringTime} items={this.state.order.items} notes={this.state.order.notes} />
        )
    }

    return(
      <React.Fragment>
        {whatToRender}
      </React.Fragment>
      )
  }

}
