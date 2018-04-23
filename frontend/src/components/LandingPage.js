import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="landing-circle">
          <div className="landing-order">
            <h1><Link to="/createshoppinglist">Order</Link></h1>
          </div>
          <div className="landing-deliver">
            <h1><Link to="/acceptsingledelivery">Deliver</Link></h1>
          </div>
        </div>
      </div>
    )
  }
};