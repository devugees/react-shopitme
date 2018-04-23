import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import leadimg from '../../pictures/landing.jpg';
import leadmobimg from '../../pictures/landing.jpg';
import buttonw from '../../pictures/button_woman.png';
import buttonm from '../../pictures/button_man.png';
import Grid from 'material-ui/Grid';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <Grid container spacing={0}>
            <Grid item xs={12} sm={4} md={4}>
                <Link to={"/createshoppinglist"} >
                    <div className="order_btn">
                        <div class="imgd">
                            <img src={buttonw} />
                        </div>
                        <div className="btn_txt">
                                I need some shopping.
                        </div>
                    </div>
                </Link>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
                <Link to={"/createshoppinglist"} >
                    <div className="delivery_btn">
                    <div class="imgd">
                        <img src={buttonm} />
                        </div>
                        <div className="btn_txt">
                            <Link to={"/accepteddelivery"} >
                                I want to shop for someone.
                            </Link>
                        </div>
                    </div>
                </Link>
            </Grid>
        </Grid>
      </div>
    )
  }
};