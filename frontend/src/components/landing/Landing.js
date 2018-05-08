import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import Grid from 'material-ui/Grid';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <Link to={"/createshoppinglist"} >
            <div className="order_btn btn">
                <div class="imgd">
                <i class="fas fa-list fa-5x"></i> 
                    </div>
                </div>
        </Link>
            
        <Link to={"/acceptsingledelivery"} >
            <div className="delivery_btn btn">
                <div class="imgd">
                <i class="fas fa-shopping-basket fa-5x"></i>
                </div>
            </div>
        </Link>
      </div>
    )
  }
};