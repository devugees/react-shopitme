import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import leadimg from '../../pictures/landing.jpg';
import leadmobimg from '../../pictures/landing_mob.jpg';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <div className="primary">
            <img src={leadmobimg} />
        </div>
        <div className="deliverit_slogan" >
            <div className="slogantxt" >
                Need some shopping delivered, or have time to shop for someone else?
            </div>
        </div>
        <div className="chooserole" >
           
                <Link to={"/createshoppinglist"} >
                    I need some groceries.
                </Link>

            <Link to={"/accepteddelivery"} >
                I want to help someone with his shopping.
                </Link>

        </div>
      </div>
    )
  }
};