import React, { Component, Fragment } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Map from '../../map/Map'
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

// import children components
import MainDeliveryPage from './MainDeliveryPage';
import AcceptSingleDelivery from './AcceptSingleDelivery'

// import next component fo single view
//import fake store
import fakeStore from '../../../fakeStore';

export default class index extends Component {
  state={...fakeStore,
  singleOrder:false,
  view:true,
   order:''}

  orderMoreInfo = index => {
    const order = [...this.props.MainDeliveryPage];
    const selectedOrder= order[index];
    console.log('deliver props',selectedOrder);
    this.setState({
      singleOrder: true,
      order: selectedOrder
    })
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };


render() {
  
    return (
<Fragment>
{this.state.orderers.map(order => <Map lat0={order.coords.lat} lng0={order.coords.lng} /> )}
<FormControl >
      <Select
        native
        value={this.state.orderers[0].deliverAdress.Distince} >
        <option value="">2 Km</option>
        <option value={5}>5 Km</option>
        <option value={8}>8 Km</option>
        <option value={10}>10 Km</option>
      </Select>
      <FormHelperText>Current Address : {this.state.orderers[0].deliverAdress.street} {this.state.orderers[0].deliverAdress.number} </FormHelperText>
    </FormControl>
           
<MainDeliveryPage />
        </Fragment>
      
      )

};
}