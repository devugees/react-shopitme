import React, { Component } from 'react';
import DeliveryList from './deliveryList'
import MapComponent from '../map/Map';
import AcceptSingleDelivery from '../master-components/AcceptSingleDelivery'

let userInfoLS = JSON.parse(localStorage.getItem('userInfo'))      
export default class ShoppingDeliveryLists extends Component {

  state = {
    coords:[],
    orders:[],
    order: null,
    loadSingleView: false,
  }

  componentDidMount(){
    userInfoLS = JSON.parse(localStorage.getItem('userInfo'))
    // be careful with the store without orderer, delete it from DB
    this.props.store.map(data => {

      if(data.orderer._id !== userInfoLS._id ) {
        return(
          this.setState( prevState => {return {
            coords: [...prevState.coords, data.orderer.coords],
            orders: [...prevState.orders, data]
          }})
        )
      }
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
    const markerToHighlight = [...this.state.coords];
    const orderToHightLight = [...this.state.orders];

    this.resertToFalse(markerToHighlight)
    this.resertToFalse(orderToHightLight)
    this.setState({ loadSingleView: false })
  }

  render(){
    
    let whatToRender = (
      <React.Fragment>
        <h1>Shopping Lists in your Area</h1>
        <MapComponent deliveryList={true} markers={this.state.coords}/>
        
        {this.state.orders.map((order, index) => {
          if ((userInfoLS._id === order.orderer._id &&  this.props.MainDeliveryPagemode) || (order.status === "In Progress" && this.props.MainDeliveryPagemode) || (order.status === "Delivered" && this.props.MainDeliveryPagemode) ) {
            return(null)
          }
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
        <AcceptSingleDelivery goback={()=>{this.goback()}} deliverAdress={this.state.order.deliverAdress} listId={this.state.order.orderID} listName={this.state.order.ordername} createdate={this.state.order.createdate} shop={this.state.order.shop} orderer={this.state.order.orderer} deliveringTime={this.state.order.deliveringTime} items={this.state.order.items} notes={this.state.order.notes} orderID={this.state.order._id}/>

        )
    }

    return(
      <React.Fragment>
        {whatToRender}
      </React.Fragment>
    )
  }
}
