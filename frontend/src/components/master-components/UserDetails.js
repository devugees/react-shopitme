import React, { Component } from 'react';

import ImageCropper from '../ImageCropper';
import RatingStars from '../RatingStars';
import EditUser from '../edit-user/EditUser';

export default class UserDetails extends Component {

  state = { userdetails: {
    firstname: 'Alice',
    lastname: 'Doe',
    email: 'alice.doe@mail.com',
    username: 'AliDoe',  
    street: 'Munsterstrass',
    number: '56',
    postcode: '12345',
    city: 'Bernau',
    mobile: '644099344',
    gender: 'Other'
  }  
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state)
    // Check for errors
    // Clear form 
    this.setState ({
      
    })
    this.props.onChange({
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: ""
    })
  };


  render() {
    return (
      <div className="user-details">
        <ImageCropper />
        <RatingStars />
        <EditUser userdetails={this.state.userdetails} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
};