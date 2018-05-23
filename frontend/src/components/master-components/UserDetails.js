import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import ImageCropper from '../ImageCropper';
import RatingStars from '../RatingStars';
import EditUser from '../edit-user/EditUser';
import fakeStore from '../../fakeStore';

import { crudAPI } from './../../helpers/helpers';

export default class UserDetails extends Component {
  state = { 
    ...fakeStore.orderer,
    passwordMatchError: true
  };

  handleChange = name => event => {
    this.setState( {
      [name]: event.target.value,
    });

    if (name === "confirmpassword") {
      const password = this.state.password;
      if( password === event.target.value) {
        this.setState({passwordMatchError: false})
      } else {
        this.setState({passwordMatchError: true})
      }
    }

    if (name === "password") {
      const confirmpassword = this.state.confirmpassword;
      if( confirmpassword === event.target.value) {
        this.setState({passwordMatchError: false})
      } else {
        this.setState({passwordMatchError: true})
      }
    }

    
  }



  handleSubmit = formtype => event => {
    event.preventDefault();
    // const userDetails = {...this.state}; // Make a copy of state
    const { firstname, 
            lastname, 
            email, 
            mobile, 
            gender, 
            accountPage, 
            deliverAdress,
            password
           } = this.state
    
    const userDetails = {
      firstname,
      lastname,
      email,
      mobile,
      location: { 
        street: deliverAdress.street,
        number: deliverAdress.number,
        postcode: deliverAdress.postcode,
        city: deliverAdress.city},
      gender,
      password,
      accountPage: this.state.accountPage,
      _id: "5b055a82e04dd029be377773"
    }

    if (formtype === "register") {
        console.log("this is register")
        crudAPI("POST", "http://localhost:4000/register", userDetails)
        .then(res => {
          if(res.err) {
            this.setState({error: res.err})
          } 
        })
    } else if (formtype === "changeuserdetails") {
      console.log("this is userdetails")
      console.log(userDetails);
      crudAPI("PUT", "http://localhost:4000/user/changeuserdetails", userDetails)
    } else { console.log("form type must be specified")}
    event.currentTarget.reset();
  };


  render() {
    //console.log(this.props.history)
    return (
      <div className="user-details">
        <ImageCropper />
        <RatingStars rating={this.state.rating}/>
        <EditUser userdetails={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error}/>
      </div>
    )
  }
};