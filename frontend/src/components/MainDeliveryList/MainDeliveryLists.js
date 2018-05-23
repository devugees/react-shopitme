import React, { Component, Fragment } from 'react';
import AcceptSingleDelivery from '../master-components/AcceptSingleDelivery'
import fakeStore from '../../fakeStore'
import Map from '../map/Map'

// import children components
import MainDeliveryList from './MainDeliveryList';


export default class MainDeliveryLists extends Component {

  state = {
   ...fakeStore,
    order: null,
    View: false,
  }
  orderMoreInfo = index => {
      const order = [...this.state.orderers];
      const selectedOrder= order[index];
      this.setState({
        View: true,
        order: selectedOrder
      })
      console.log(selectedOrder)
      }
      editing = () =>{
        this.setState(prevState => { return {View: !prevState.View}})
    }
render(){
      let whatToRender = (
        <Fragment>
        <Map />
    {this.state.orderers.map((mainDeliveryList, index) => <MainDeliveryList key={index} mainDeliveryList={mainDeliveryList} orderMoreInfo={()=> {this.orderMoreInfo(index)}}/>)}
        </Fragment>)
      if(this.state.View) {
        whatToRender = (
          <AcceptSingleDelivery editing={()=>{this.editing()}}  order={this.state.order} />
          )
      }
      return(
        <React.Fragment>
          {whatToRender}
        </React.Fragment>
        )
    }
};