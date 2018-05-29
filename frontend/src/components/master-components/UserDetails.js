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
    street: fakeStore.orderer.deliverAdress.street,
    number: fakeStore.orderer.deliverAdress.number,
    city: fakeStore.orderer.deliverAdress.city,
    postcode: fakeStore.orderer.deliverAdress.postcode,
    imageEdit:false,
    passwordMatchError: true
  };

  handleChange = name => event => {
    this.setState({
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
    console.log(this.state)
    // const userDetails = {...this.state}; // Make a copy of state

    const { firstname, 
      lastname, 
      email, 
      mobile, 
      gender, 
      accountPage, 
      street,
      postcode,
      number,
      city,
      password
     } = this.state
    
     const userDetails = {
      firstname,
      lastname,
      email,
      mobile,
      location: { 
        street: street,
        number: number,
        postcode: postcode,
        city: city},
      gender,
      password,
      accountPage: this.state.accountPage,
      _id: "5b0bcf9f1886ca325f69b68a"
    }
    if (formtype === "register") {
      console.log(userDetails);
        crudAPI("POST", "/register", userDetails)
        .then(body => {
          if(body.error) {
            this.setState({response: body.error})
          } else {
            this.setState({response: body.success})
          }
        })
    } else if (formtype === "changeuserdetails") {
      console.log(userDetails);
      if (!userDetails.password) { delete userDetails[password]}
      crudAPI("PUT", "/user/changeuserdetails", userDetails)
      .then(body => { 
        console.log('body error', body.error);
        if(body.error){this.setState({response: body.error})
      }
      else {this.setState({response: body.message})}
     });              
    } else { console.log("form type must be specified")}
    event.currentTarget.reset();
  };

  editpicHandler = () => {
    this.setState({
    imageEdit:true
   }) 
  }


  render() {
    return (
      <div className="user-details">
        <Image imgSrc={userPic} editpicHandler={this.editpicHandler} />
        {this.state.imageEdit ? <ImageCropper/>: null}
        <RatingStars rating={this.state.rating}/>
        <EditUser userdetails={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error} response={this.state.response}/>
      </div>
    )
  }
};