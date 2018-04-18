import React, { Component } from 'react';
import Button from 'material-ui/Button';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="landing-circle">
          <div className="landing-order">
            <h1><a href="/createshoppinglist">Order</a></h1>
          </div>
          <div className="landing-deliver">
            <h1><a href="/acceptsingledelivery">Deliver</a></h1>
          </div>
        </div>
      </div>
    )
  }
};