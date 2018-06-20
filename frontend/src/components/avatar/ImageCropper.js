import React, { Component } from 'react';
import AvatarImageCropper from 'react-avatar-image-cropper';
//import config from "../config/config.js";
import { authCrudFileAPI } from '../../helpers/helpers';
import fakeStore from '../../fakeStore';

export default class ImageCropper extends Component {

  constructor(props) {
    super()
    this.state = {
      imgSrc: props.imgSrc,
    }
  }

  apply = file => {
    let fd = new FormData();
    fd.append('avatar', file, file.name);
    
    const id = fakeStore.userInfo._id;
    const endpoint = 'http://localhost:4000/user/profile/' + id;

    authCrudFileAPI(endpoint, fd)
    .then(res => {
      const url = 'http://localhost:4000/' + res.src;

      // send the new Image to the Fake Store
      this.props.updateUserPicture(url);
      
      // send the new Image to the Local Storage
      let userInfoLS = JSON.parse(localStorage.getItem('userInfo'));
      userInfoLS.profileImgPath = url;
      localStorage.setItem('userInfo', JSON.stringify(userInfoLS));
      this.setState({
          imgSrc: url
      })
    })
  }

  render() {
    const style = {
      width: '137px',
      height: '137px',
      position: "absolute",
      top: "56px",
      right: "1rem",
      margin: 'auto',
      border: '1px solid #ccc',
      borderRadius: '50%',
      marginTop: '20px',
    }
    return (
      <div style={style}>
        <AvatarImageCropper
          apply={this.apply}
          rootStyle={{ background: `url(${this.state.imgSrc}) no-repeat center`, borderRadius: '50%'}}
        />
      </div>
    );
  }
}
