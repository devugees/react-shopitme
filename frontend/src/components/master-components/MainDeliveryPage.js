import React, { Component, Fragment } from 'react';
import Map from '../map/Map'
//import fake store
import fakeStore from '../../fakeStore';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Paper from 'material-ui/Paper';

const style = {
MarginTop:"1rem"
}


export default class MainDerliveryPage extends Component {
    state = {...fakeStore}

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };
    render() {
       
        return (
    <Fragment>
    <FormControl >
          <Select
            native
            value={this.state.orderers[0].deliverAdress.Distince}
            onChange={this.handleChange('age')}
           
          >
            <option value="">2 Km</option>
            <option value={5}>5 Km</option>
            <option value={20}>8 Km</option>
            <option value={30}>10 Km</option>
          </Select>
          <FormHelperText>Current Address : {this.state.orderers[0].deliverAdress.street} {this.state.orderers[0].deliverAdress.number} </FormHelperText>
        </FormControl>


               
       <Map lat0={this.state.orderers[0].coords.lat}
             lng0={this.state.orderers[0].coords.lng}
             lat1={this.state.orderers[1].coords.lat}
             lng1={this.state.orderers[1].coords.lng}
             lat2={this.state.orderers[2].coords.lat}
             lng2={this.state.orderers[2].coords.lng}
             lat3={this.state.orderers[3].coords.lat}
             lng3={this.state.orderers[3].coords.lng}
             />


        {this.state.orderers.map( orderer => 
        <Paper className="paper" style={style}>
         #{this.state.listId ++} from: {this.state.deliveringTime.start} till: {this.state.deliveringTime.end} {this.state.orderHistory.shop} for: {orderer.firstname} {orderer.rating} {this.state.deliveringTime.date}
       </Paper>
       )}

      {/*<Paper>
        #{this.state.listId} from: {this.state.deliveringTime.start} till:
        {this.state.deliveringTime.end} {this.state.store[0]} for: {this.state.orderers[0].orderer.firstname} {this.state.orderers[0].orderer.lastname} {this.state.orderers[0].orderer.rating} {this.state.deliveringTime.date} 
       </Paper>
       <Paper>
        #{this.state.listId+1} from: {this.state.deliveringTime.start} till:
        {this.state.deliveringTime.end} {this.state.store[1]} for: {this.state.orderers[1].orderer.firstname} {this.state.orderers[1].orderer.lastname} {this.state.orderers[1].orderer.rating} {this.state.deliveringTime.date} 
       </Paper>
       <Paper>
        #{this.state.listId+2} from: {this.state.deliveringTime.start} till:
        {this.state.deliveringTime.end} {this.state.store[2]} for: {this.state.orderers[2].orderer.firstname} {this.state.orderers[2].orderer.lastname} {this.state.orderers[0].orderer.rating} {this.state.deliveringTime.date} 
       </Paper>
       <Paper>
        #{this.state.listId+3} from: {this.state.deliveringTime.start} till:
        {this.state.deliveringTime.end} {this.state.store[1]} for: {this.state.orderers[3].orderer.firstname} {this.state.orderers[3].orderer.lastname} {this.state.orderers[3].orderer.rating} {this.state.deliveringTime.date} 
       </Paper>*/}
       
       </Fragment>
        );
      }
}