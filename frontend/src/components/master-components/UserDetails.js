import React, { Component } from 'react';
import ImageCropper from '../avatar/ImageCropper';
import Image from '../avatar/image';
import defaultPic from '../../pictures/BoB.png'
//import { BrowserRouter as Router } from 'react-router-dom'
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
    passwordMatchError: true,
    userPicture: defaultPic,
    gender: 'Female'
  };

  componentDidMount(){
    let geoPos = localStorage.getItem('geoPos')

    if(geoPos === "undefined"){ 
      return;
    } else {
      geoPos = JSON.parse(geoPos);
      this.setState({
        coords: {
          lat: geoPos.latitude,
          lng: geoPos.longitude
        }
      }); 
    }
  }

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
    const userDetails = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      mobile: this.state.mobile,
      location: { 
        street: this.state.street,
        number: this.state.number,
        postcode: this.state.postcode,
        city: this.state.city
      },
      coords: this.state.coords,
      gender: this.state.gender,
      password: this.state.password,
      accountPage: this.state.accountPage,
      _id: this.state._id
    }
    
    if (formtype === "register") {
      crudAPI("POST", "/register", userDetails)
      .then(body => {
        if(body.error) {
          this.setState({response: body.error})
        } else {
          this.setState({response: body.success},window.history.back())
        }
      })
    } else if (formtype === "changeuserdetails") {
      if (!userDetails.password) { delete userDetails["password"]}
       authCrudAPI("PUT", "/user/changeuserdetails", userDetails)
      .then(body => { 
        if(body.error){this.setState({response: body.error})
      }
      else {
        this.setState({response: body.message});
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
    let isRegisterForm;
    let isChangeUser; 
    //let endpoint;

    // if there is a token (after login) render the Change SUer Details Form
    // else render Register Form
    if(localStorage.getItem("token")) {
      isRegisterForm = false;
      isChangeUser = true;
    } else {
      isRegisterForm = true;
      isChangeUser = false;
    }

    let userPicture = defaultPic;
    if(this.state.profileImgPath) {
      userPicture = this.state.profileImgPath
    }

    /*function updateImg(src){
      this.setState({
        userPicture: src
      })
    }*/

    return (
      <div className="user-details">
         { isChangeUser ? <Image imgSrc={userPicture} editpicHandler={this.editpicHandler} /> : null}
        {this.state.imageEdit ? <ImageCropper updateUserPicture={this.props.updateUserPicture} />: null}
        {isChangeUser ? <RatingStars rating={this.state.rating}/> : null}
        <EditUser isRegisterForm={isRegisterForm} isChangeUser={isChangeUser} userdetails={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error} response={this.state.response} passwordMatchError={this.state.passwordMatchError} />
      </div>
    )
  }
};