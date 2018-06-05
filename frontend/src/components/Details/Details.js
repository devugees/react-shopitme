import React, { Component } from 'react';
import { Paper, TextField, Grid, Input, InputLabel, FormControl } from '@material-ui/core';
import './Details.css';
import fakeStore from '../../fakeStore';

export default class Details extends Component {
    constructor(props){
        super(props);
        this.state = {
          deliverAdress: {...props.deliverAdress},
          editing:false,
          newDeliverAdress:{
            street: '',
            number: '',
            postcode: '',
            city: ''
          },
          deliveringTime: {
            start: props.start,
            end: props.end
          },
          shop: props.shop
      }
    }
    componentDidMount(){
      this.setState({
          newDeliverAdress:{
            street: this.state.deliverAdress.street,
            number: this.state.deliverAdress.number,
            postcode: this.state.deliverAdress.postcode,
            city: this.state.deliverAdress.city
          }
        })
    }

  constructor(props){
    super()
    if(localStorage.getItem('userInfo')){
      const userInfoLS = JSON.parse(localStorage.getItem('userInfo'))
      this.state ={...userInfoLS.location}
    } else {
      this.state ={...fakeStore.userInfo.location}
    }

  }

  componentDidMount(){
    this.setState({
      newDeliverAdress:{
        street: this.state.street,
        number: this.state.number,
        postcode: this.state.postcode,
        city: this.state.city
      }
    })
  }

  editing = () =>{
      this.setState(prevState => { return {editing: !prevState.editing}})
  }

  finishEditing = () => {
    this.setState({
      newDeliverAdress:{
        street: this.state.street,
        number: this.state.number,
        postcode: this.state.postcode,
        city: this.state.city
      }
    },()=>this.props.dataReceive(this.state.newDeliverAdress))
    this.setState(prevState => { return {editing: !prevState.editing}})
  }
    
  editLocation = name => event => {
    this.setState({[name]: event.target.value},
    ()=>this.props.dataReceive( this.state.newDeliverAdress, this.state.shop, this.state.orderer));
  }

  handlerChangeStartTime = event => {
    this.setState({ ...this.state,deliveringTime: {start:event.target.value} },()=>
      this.props.grabDataStartDelivering(this.state.deliveringTime.start));
  }

  handlerChangeEndTime = event => {
    this.setState({...this.state, deliveringTime:{end:event.target.value} },()=>
      this.props.grabDataEndDelivering(this.state.deliveringTime.end));
  }
    
  render() {
    let whatToRender = (
      <p>{this.state.street}.{this.state.number}<br/> {this.state.postcode} {this.state.city} <span onClick={this.editing}>✎</span> </p>          

      )
    if(this.state.editing){
      whatToRender = (  
       <p>
          <FormControl className="todo-list-form">
          <Input autoFocus className="location-input" onChange={this.editLocation('street')} placeholder={this.state.newDeliverAdress.street} />
            <Input  className="location-input2"  onChange={this.editLocation('number')} placeholder={this.state.newDeliverAdress.number} />
            <Input  className="location-input3"  onChange={this.editLocation('postcode')} placeholder={this.state.newDeliverAdress.postcode} />
            <Input  className="location-input4"  onChange={this.editLocation('city')} placeholder={this.state.newDeliverAdress.city}/>
          </FormControl>
          <span onClick={this.finishEditing}>✔</span>
        </p>
      )
    }
  
    return (
    <div className="details">
<Paper>
<Grid container spacing={24}>
    <Grid  item xs={12}>
      From:
       <TextField
        type="datetime-local"
        defaultValue={this.state.deliveringTime.start}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Grid>
    <Grid  item xs={12}>
       To: 
       <TextField
        type="datetime-local"
        defaultValue={this.state.deliveringTime.end}
        InputLabelProps={{
          shrink: true,
       }}
    />
    </Grid>
    <Grid  item xs={12}>
        <FormControl>
           <InputLabel htmlFor="name-input">Store:</InputLabel>
           <Input id="name-input" defaultValue={this.state.shop}/>
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
