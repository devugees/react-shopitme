import React, { Component } from 'react';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';



import './Details.css';

export default class Details extends Component {
    constructor(props){
        super();
        this.state = {
          deliverAdress:{
            street: 'Sonnenallee',
            number: '154',
            postcode: '12055',
            city: 'Berlin'
          },
          editing:false,
          newDeliverAdress:{
            street: '',
            number: '',
            postcode: '',
            city: ''
          }
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
      })
      this.setState(prevState => { return {editing: !prevState.editing}})
    }
    
    editLocation = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    
    render() {
      let whatToRender = (
        <p>{this.state.newDeliverAdress.street}.{this.state.newDeliverAdress.number}<br/> {this.state.newDeliverAdress.postcode} {this.state.newDeliverAdress.city} <span onClick={this.editing}>✎</span> </p>          

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
        defaultValue="2018-05-01T16:30"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Grid>
    <Grid  item xs={12}>
       To: 
       <TextField
        type="datetime-local"
        defaultValue="2018-05-01T16:30"
        InputLabelProps={{
          shrink: true,
       }}
    />
    </Grid>
    <Grid  item xs={12}>
        <FormControl>
           <InputLabel htmlFor="name-input">Store:</InputLabel>
           <Input id="name-input" />
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
