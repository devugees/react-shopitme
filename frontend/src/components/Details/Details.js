import React, { Component } from 'react';
import { Paper, TextField, Grid, Input, InputLabel, FormControl } from '@material-ui/core';
import fakeStore from '../../fakeStore';


export default class Details extends Component {

  constructor(props){
    super()
    if(localStorage.getItem('userInfo')){
      const userInfoLS = JSON.parse(localStorage.getItem('userInfo'))
      this.state ={
        ...userInfoLS.location,
        deliveringTime: {
          start: props.start,
          end: props.end
        },
        shop: props.shop,
        deliverAdress:{
          street:props.deliverAdress.street,
          number: props.deliverAdress.number,
          postcode: props.deliverAdress.postcode,
          city: props.deliverAdress.city
        }
      }
    } else {
      this.state ={
        ...fakeStore.userInfo.location,
      deliveringTime: {
        start: props.start,
        end: props.end
      },
      shop: props.shop,
      deliverAdress:{
        street:props.deliverAdress.street,
        number: props.deliverAdress.number,
        postcode: props.deliverAdress.postcode,
        city: props.deliverAdress.city
      }
      }
    }
  }

  editing = () =>{
      this.setState(prevState => { return {editing: !prevState.editing}})
  }

  finishEditing = () => {
    this.setState({
      deliverAdress:{
        street: this.state.street,
        number: this.state.number,
        postcode: this.state.postcode,
        city: this.state.city
      }
    },()=>this.props.dataReceive(this.state.deliverAdress,this.state.shop, this.state.orderer))
    this.setState(prevState => { return {editing: !prevState.editing}})
  }
    
  editLocation = name => event => {
    this.setState({[name]: event.target.value},
    ()=>this.props.dataReceive(this.state.deliverAdress, this.state.shop, this.state.orderer));
  }

  handlerChangeStartTime = event => {
    let deliveringTime = this.state.deliveringTime
    deliveringTime.start = event.target.value
    this.setState({deliveringTime});
    this.props.grabDataStartDelivering(event.target.value)
  }

  handlerChangeEndTime = event => {
    let deliveringTime = this.state.deliveringTime
    deliveringTime.end = event.target.value
    this.setState({deliveringTime});
    this.props.grabDataEndDelivering(event.target.value)
  }
    
  render() {
    const styles = {
      details:{
        paddingTop: '1rem'
      }
    }
    let whatToRender = (
      <p>
        <p className="deliveryAdress">Delivery Address</p>
      {this.state.deliverAdress.street}.{this.state.deliverAdress.number}<br/>
      {this.state.deliverAdress.postcode} {this.state.deliverAdress.city} 
      <span onClick={this.editing}>✎</span> 
      </p>          
      )
    if(this.state.editing){
      whatToRender = (  
        
       <p >
         <p className="deliveryAdress">Delivery Address</p>
          <FormControl className="todo-list-form">
            
            <Input autoFocus className="location-input" onChange={this.editLocation('street')} placeholder={this.state.deliverAdress.street} />
            <Input  className="location-input2"  onChange={this.editLocation('number')} placeholder={this.state.deliverAdress.number} />
            <Input  className="location-input3"  onChange={this.editLocation('postcode')} placeholder={this.state.deliverAdress.postcode} />
            <Input  className="location-input4"  onChange={this.editLocation('city')} placeholder={this.state.deliverAdress.city}/>
          </FormControl>
          <span onClick={this.finishEditing}>✔</span>
        </p>
      )
    }
  
    return (
    <div style={styles.details}>
      <Paper>
        <Grid container spacing={24}>
          <Grid  item xs={12}>
            From:
             <TextField
              type="datetime-local"
              onChange={this.handlerChangeStartTime}
              value={this.state.deliveringTime.start}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid  item xs={12}>
            To: 
            <TextField
              onChange={this.handlerChangeEndTime}
              type="datetime-local"
              value={this.state.deliveringTime.end}
              InputLabelProps={{
                shrink: true,
            }}
          />
          </Grid>
          <Grid  item xs={12}>
              <FormControl>
                 <InputLabel htmlFor="name-input">Store:</InputLabel>
                 <Input id="name-input" onChange={this.editLocation('shop')} defaultValue={this.state.shop}/>
              </FormControl>
          </Grid>
          <Grid  item xs={12}>
          {whatToRender}         
          </Grid>
        </Grid>
      </Paper>
    </div>
    );
  }
}
