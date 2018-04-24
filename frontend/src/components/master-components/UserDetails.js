import React, { Component } from 'react';

import ImageCropper from '../ImageCropper';
import RatingStars from '../RatingStars';
import EditUser from '../edit-user/EditUser';

export default class UserDetails extends Component {

  state = {...fakeStore}


  render() {
    return (
      <div className="user-details main">
        <ImageCropper />
        <RatingStars />
        <EditUser globalProps={this.state}/>
      </div>
    )
  }
};