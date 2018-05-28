import React, { Component } from 'react';

import ImageCropper from '../avatar/ImageCropper';
import Image from '../avatar/image';
import userPic from '../../pictures/BoB.png'

import { BrowserRouter as Router } from 'react-router-dom'

import RatingStars from '../RatingStars';
import EditUser from '../edit-user/EditUser';
import fakeStore from '../../fakeStore';

import { crudAPI } from './../../helpers/helpers';

export default class UserDetails extends Component {
  state = { 
    ...fakeStore.orderer,
    imageEdit:false
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
      accountPage: this.state.accountPage
    }

    if (formtype === "register") {
      crudAPI("POST", "/register", userDetails)
      .then((res) => {
        if(res.err) {
          this.setState({error: res.err})
        } else {
          this.props.history.push("/")
        }
      })
        
    } else if (formtype === "changeuserdetails") {
      console.log("send the Data to the Backend-Route Changeuserdetails")
    } else { console.log("form type must be specified")}
    event.currentTarget.reset();
  };

  editpicHandler = () => {
    this.setState({
    imageEdit:true
   }) 
  }


  render() {
    console.log(this.props.history)
    return (
      <div className="user-details">
        <Image imgSrc={userPic} editpicHandler={this.editpicHandler} />
        {this.state.imageEdit ? <ImageCropper/>: null}
        <RatingStars rating={this.state.rating}/>

        <EditUser userdetails={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error} />

      </div>
    )
  }
};