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
          location: `Sonnenalle 123
           12054 Berlin`,
           editing: false,

        }
      }
      editLocation = event => {
        this.setState({
            location:event.target.value
        })
      }
      editing = () =>{
        this.setState(prevState => { return {editing: !prevState.editing}})
    }
    


    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    render() {
      let whatToRender = (
        <p>{this.state.location} <span onClick={this.editing}>✎</span> </p>          

        )
      if(this.state.editing){
        whatToRender = (
          <p>
            <FormControl className="todo-list-form">
              <InputLabel htmlFor="name-input">New location</InputLabel>
              <Input autoFocus className="location-input"  onChange={this.editLocation} value={this.state.location} />
            </FormControl>
            <span onClick={this.editing}>✔</span>
          </p>
          )
      }
      return (
    <div className="details">
<Paper>
<Grid container spacing={24}>
    <Grid  item xs={12}>
       from:
       <TextField
        type="datetime-local"
        defaultValue="2018-05-01T16:30"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Grid>
    <Grid  item xs={12}>
       to:   
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
