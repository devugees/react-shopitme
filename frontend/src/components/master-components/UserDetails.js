import React, { Component } from 'react';
import ImageCropper from '../avatar/ImageCropper';
import Image from '../avatar/image';
import userPic from '../../pictures/BoB.png'
import RatingStars from '../RatingStars';
import EditUser from '../edit-user/EditUser';
import fakeStore from '../../fakeStore';
import { crudAPI, authCrudAPI } from './../../helpers/helpers';

export default class UserDetails extends Component {
  state = { 
    ...fakeStore.userInfo,
    city: fakeStore.userInfo && fakeStore.userInfo.location.city, 
    street: fakeStore.userInfo && fakeStore.userInfo.location.street,
    number: fakeStore.userInfo && fakeStore.userInfo.location.number,
    postcode: fakeStore.userInfo && fakeStore.userInfo.location.postcode,
    imageEdit:false,
    passwordMatchError: true
  };



handleChange = name => event => {
    
  console.log(name, event.target.value)
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

     const userDetails = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      mobile: this.state.mobile,
      location: { 
        street: this.state.street,
        number: this.state.number,
        postcode: this.state.postcode,
        city: this.state.city},
      gender: this.state.gender,
      password: this.state.password,
      accountPage: this.state.accountPage,
      _id: this.state._id
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
      if (!userDetails.password) { delete userDetails["password"]}
       authCrudAPI("PUT", "/user/changeuserdetails", userDetails)
      .then(body => { 
        if(body.error){this.setState({response: body.error})
      }
      else {
        this.setState({response: body.message});
        console.log(body)
        this.props.updateUserData(body.user)
      }
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
        <EditUser userdetails={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error} response={this.state.response} passwordMatchError={this.state.passwordMatchError} />
      </div>
    )
  }
};