import React, { Component } from 'react';
import DeliveryList from '../main-delivery-page'
//import fake store
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';

export default class MainDeliveryPage extends Component {

  state={
    data:'',
    isLoading:true
  }

  componentDidMount(){
    fetch('/user/maindeliverylist')
      .then( response =>{
        return response.json();
      })
      .then(data => {
         this.setState({
           data:data,
           isLoading:false
         })
      });
  }

  render(){
    if(this.state.isLoading) {
      return ( <CircularProgress style={{ color: purple[500]}} thickness={7} /> )
    }
    return ( <DeliveryList store={this.state.data}/>)
  }
}
