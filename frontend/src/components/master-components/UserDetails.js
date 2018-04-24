import React, { Component } from 'react';

import ImageCropper from '../ImageCropper';
import RatingStars from '../RatingStars';
import EditUser from '../edit-user/EditUser';
import fakeStore from '../../fakeStore';

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
    const userDetails = {...this.state}; // Make a copy of state
    if (formtype === "register") {
      console.log("send the Data to the Backend-Route Register")
    } else if (formtype === "changeuserdetails") {
      console.log("send the Data to the Backend-Route Changeuserdetails")
    } else { console.log("form type must be specified")}
    event.currentTarget.reset();
  };


  render() {
    return (
      <div className="user-details">
        <ImageCropper />
        <RatingStars />
        <EditUser userdetails={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
};