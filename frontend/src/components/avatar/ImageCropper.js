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
    const endpoint = '/user/profile/' + id;

    authCrudFileAPI(endpoint, fd)
    .then(res => {
      const url = '/' + res.src;

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
      width: '120px',
      height: '120px',
      position: "absolute",
      top: "0",
      right: "1rem",
      margin: 'auto',
      border: '1px solid #ccc',
      borderRadius: '50%',
      marginTop: '1rem',
    }
    const maxsize= 5120 * 5120 *5
    return (
      <div style={style}>
        <AvatarImageCropper
          maxsize={maxsize}
          apply={this.apply}
          rootStyle={{ background: `url(${this.state.imgSrc}) no-repeat center`, borderRadius: '50%'}}
        />
      </div>
    );
  }
}
