import React, { Component } from 'react';
import AvatarImageCropper from 'react-avatar-image-cropper';
//import config from "../config/config.js";
import { authCrudFileAPI } from '../../helpers/helpers';
import fakeStore from '../../fakeStore';

export default class ImageCropper extends Component {


    constructor(props) {
        super(props);
        this.state = {
            imgSrc: props.imgSrc,
        }
    }

    apply = (file) => {
        let fd = new FormData();
        fd.append('avatar', file, file.name);
        
        const id = fakeStore.userInfo._id;

        authCrudFileAPI('/user/profile/' + id, fd)
        .then(res => {
            this.setState({
                imgSrc: 'http://localhost:4000/' + res.src
            })
        })
    }


    render() {
        const style = {
            width: '135px',
            height: '135px',
            position: "absolute",
            top: "56px",
            right: "1rem",
            margin: 'auto',
            border: '1px solid #ccc',
            borderRadius: '50%',
            marginTop: '20px'
        }
        return (
            <div style={style}>
                <AvatarImageCropper apply={this.apply} rootStyle={{ background: `url(${this.state.imgSrc}) no-repeat center`, borderRadius: '50%' }} />
            </div>

        );
    }
}

