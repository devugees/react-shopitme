import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import './notes.css';




export default class TextFields extends Component {
  state = {
    name: 'Add your Notes'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  

  render() {
    return (

     <Paper className='notes' elevation={4}>
        <TextField
        label="Add your Notes"
        InputProps={{
          disableUnderline: true,
          
        }}
        InputLabelProps={{
          shrink: true
        }}
      />
      </Paper>
    );
  }
}