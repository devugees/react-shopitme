import React, { Component } from 'react';

import ImageCropper from '../ImageCropper';
import RatingStars from '../RatingStars';
import EditUser from '../edit-user/EditUser';

export default class UserDetails extends Component {

  state = { userdetails: {
    username: 'AliDoe',  
    firstname: 'Alice',
    lastname: 'Doe',
    email: 'alice.doe@mail.com',
    street: 'Munsterstrass',
    number: '56',
    postcode: '12345',
    city: 'Bernau',
    mobile: '644099344',
    gender: 'Other'
  }, formType: {
    Register: true,
    UpdateAccountDetails: false
  }  
  };

  handleChange = name => event => {
    const userdetails = {...this.state.userdetails};
    userdetails[name] = event.target.value;
    this.setState({userdetails});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const userdetails = {...this.state.userdetails}
    console.log(userdetails)
  };


  render() {
    return (
      <div className="user-details">
        <ImageCropper />
        <RatingStars />
        <EditUser formType={this.state.formType} userdetails={this.state.userdetails} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
};