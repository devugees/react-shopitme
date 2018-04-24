import React, { Component } from 'react';

import ImageCropper from '../ImageCropper';
import RatingStars from '../RatingStars';
import EditUser from '../edit-user/EditUser';
import fakeStore from '../../fakeStore';

import { crudAPI } from './../../helpers/helpers';

export default class UserDetails extends Component {
  state = { 
    ...fakeStore.orderer
  };

  handleChange = name => event => {
    this.setState( {
      [name]: event.target.value,
    });
  };

  handleSubmit = formtype => event => {
    event.preventDefault();
    // const userDetails = {...this.state}; // Make a copy of state
    const userDetails = {
      "email": "sabine.gottfr1231231@gmail.com",
      "password": "123"
    }

    if (formtype === "register") {
      crudAPI("POST", "http://localhost:4000/register", userDetails)
      .then(response => console.log(response))
      
    } else if (formtype === "changeuserdetails") {
      console.log("send the Data to the Backend-Route Changeuserdetails")
    } else { console.log("form type must be specified")}
    event.currentTarget.reset();
  };


  render() {
    return (
      <div className="user-details">
        <ImageCropper />
        <RatingStars rating={this.state.rating}/>
        <EditUser userdetails={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
};