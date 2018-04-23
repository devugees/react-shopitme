import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './Landing.css';
import orderimg from '../../pictures/lorder.jpg';

export default class Landing extends Component {
  render() {
    const style = {
      backgoundImage: orderimg
    }
    return (
      <div className="landing-page" style={style} >

        <div className="go">
          <div className="order">
            <a href="">
              Order
            </a>
          </div>
          <div className="deliver">
            <a href="">
              Deliver
              </a>
          </div>
        </div>
      </div>
    )
  }
};