import React, { Component } from 'react';

import ImageCropper from '../ImageCropper';
import RatingStars from '../RatingStars';
import EditUser from '../edit-user/EditUser';

export default class UserDetails extends Component {

    state = { 
    firstname: 'alice',
    lastname: 'Doe',
    email: 'alice.doe@mail.com',
    username: 'AliDoe',  
    street: 'Munsterstrass',
    number: '56',
    postcode: '12345',
    city: 'Bernau',
    mobile: '644099344',
    rating: 3
  };


  render() {
    return (
      <div className="user-details main">
        <ImageCropper />
        <RatingStars rating={this.state.rating}/>
        <EditUser globalProps={this.state}/>
      </div>
    )
  }
};