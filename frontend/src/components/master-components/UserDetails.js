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

  handleSubmit = (event) => {
    console.log(this.state)
    // Check for errors
    // Clear form 
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