import React, { Component } from 'react';
import { Paper, TextField, Grid, Input, InputLabel, FormControl } from '@material-ui/core';
import fakeStore from '../../fakeStore';

const date = new Date();
const day = date.getDate();
const month = date.getMonth()+1;
const year = date.getFullYear();
const timeHours = date.getHours();
let timeMin = date.getMinutes();
const zeroMonth = (month > 9) ? (month) : ('0' + month);
const zeroDay = (day > 9) ? (day) : ('0' + day);

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
        shop: props.shop 
      }
    } else {
      this.state ={
        ...fakeStore.userInfo.location,
      deliveringTime: {
        start: props.start,
        end: props.end
      },
      shop: props.shop
      }
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
    },()=>this.props.dataReceive(this.state.newDeliverAdress,this.state.shop, this.state.orderer))
    this.setState(prevState => { return {editing: !prevState.editing}})
  }
    
  editLocation = name => event => {
    this.setState({[name]: event.target.value},
    ()=>this.props.dataReceive(this.state.newDeliverAdress, this.state.shop, this.state.orderer));
  }

  handlerChangeStartTime = event => {
    this.setState({deliveringTime: { start:event.target.value}});
    this.props.grabDataStartDelivering(event.target.value)
  }

  handlerChangeEndTime = event => {
    this.setState({deliveringTime:{end:event.target.value} });
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
      {this.state.street}.{this.state.number}<br/>
      {this.state.postcode} {this.state.city} 
      <span onClick={this.editing}>✎</span> 
      </p>          
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
    <div style={styles.details}>
      <Paper>
        <Grid container spacing={24}>
          <Grid  item xs={12}>
            From:
             <TextField
              type="datetime-local"
              onChange={this.handlerChangeStartTime}
              defaultValue={this.state.deliveringTime.start || `${year}-${zeroMonth}-${zeroDay}T${timeHours}:${timeMin}`}
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
              defaultValue={this.state.deliveringTime.end || `${year}-${zeroMonth}-${zeroDay}T${timeHours + 3}:${timeMin}`}
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
