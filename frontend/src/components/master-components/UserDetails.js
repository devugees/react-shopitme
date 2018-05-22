import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
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
    console.log(this.state)
    // const userDetails = {...this.state}; // Make a copy of state

    const { firstname, 
            lastname, 
            email, 
            mobile, 
            gender, 
            accountPage, 
            deliverAdress,
            password } = this.state
    
    const userDetails = {
      firstname,
      lastname,
      email,
      mobile,
      street: this.state.deliverAdress.street,
      number: this.state.deliverAdress.number,
      postcode: this.state.deliverAdress.postcode,
      city: this.state.deliverAdress.city,
      gender,
      password,
      accountPage: this.state.accountPage,
      _id: "5ae9b5de39bac871b69caecd"
    }

    if (formtype === "register") {
      crudAPI("POST", "http://localhost:4000/register", userDetails)
      .then((res) => {
        if(res.err) {
          this.setState({error: res.err})
        } else {
          this.props.history.push("/")
        }
      })
        
    } else if (formtype === "changeuserdetails") {
      console.log(userDetails);
      crudAPI("PUT", "http://localhost:4000/user/changeuserdetails", userDetails)
      .then((res) => {
        if(res.err) {
          this.setState({error: res.err})
        } else {
          console.log("success editing user details")
          /* this.props.history.push("/users/changeuserdetails") */
        }
      })
    } else { console.log("form type must be specified")}
    event.currentTarget.reset();
  };


  render() {
    console.log(this.props.history)
    return (
      <div className="user-details">
        <ImageCropper />
        <RatingStars rating={this.state.rating}/>
        <EditUser userdetails={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error} />
      </div>
    )
  }
};