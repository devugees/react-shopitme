import React, { Component } from 'react';
import ImageCropper from '../avatar/ImageCropper';
import Image from '../avatar/image';
import defaultPic from '../../pictures/BoB.png';
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
    gender: 'Female'
  }

  componentDidMount(){
    const geoPos = localStorage.getItem('geoPos')
    const userInfoLS = localStorage.getItem('userInfo')
    if(geoPos === "undefined"){ 
      return;
    } else {
      const geoPosParsed = JSON.parse(geoPos);
      this.setState({
        coords: {
          latitude: geoPosParsed.latitude,
          longitude: geoPosParsed.longitude
        }
      }); 
    }
    if(userInfoLS === null){
      return;
    } else {
      const userInfoLSParsed = JSON.parse(userInfoLS);
      this.setState({
        ...userInfoLSParsed,
        city: userInfoLSParsed.location.city, 
        street: userInfoLSParsed.location.street,
        number: userInfoLSParsed.location.number,
        postcode: userInfoLSParsed.location.postcode,
      });
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    // to update the issue with the text field in userDetailsFields
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

    const userInfoLS = localStorage.getItem('userInfo')
    if(userInfoLS === null){
      return;
    } else {
      const userInfoLSParsed = JSON.parse(userInfoLS);
      if(name === 'city' || name === 'street' || name === 'number' || name === 'postcode'){
        userInfoLSParsed.location[name] = event.target.value 
      }else {
        userInfoLSParsed[name] = event.target.value
      }
      localStorage.setItem('userInfo', JSON.stringify(userInfoLSParsed)) 
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
  }

  editpicHandler = () => {
    this.setState({
      imageEdit:true
    }) 
  }

  render() {
    let isRegisterForm;
    let isChangeUser;
    let userInfoLS
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
    if(localStorage.getItem('userInfo')){
      userInfoLS = JSON.parse(localStorage.getItem('userInfo'))
      if(userInfoLS.profileImgPath){
        userPicture = userInfoLS.profileImgPath
      }
    }

    return (
      <div className="user-details">
        <div className="ratingImage">
        {isChangeUser ? <RatingStars userInfo={userInfoLS} rating={this.state.ratingstars}/> : null}
        { isChangeUser ? <Image imgSrc={userPicture} editpicHandler={this.editpicHandler} /> : null}
        {this.state.imageEdit ? <ImageCropper updateUserPicture={this.props.updateUserPicture} />: null}
        <EditUser
          isRegisterForm={isRegisterForm}
          isChangeUser={isChangeUser}
          userdetails={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          error={this.state.error}
          response={this.state.response}
          passwordMatchError={this.state.passwordMatchError}
        />
      </div>
    )
  }
};