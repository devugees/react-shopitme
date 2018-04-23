import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'
import leadimg from '../../pictures/landing.jpg';
import leadmobimg from '../../pictures/landing1.jpg';
import buttonw from '../../pictures/button_woman.png';
import buttonm from '../../pictures/button_man.png';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
            <div className="deliverit_slogan" >
                Peer to peer <br/>delivery made easy!
                <div className="chooserole" >
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Link to={"/createshoppinglist"} >
                            <div className="order">
                                <div className="btn_txt">
                                    <Typography variant="title" color="inherit">
                                        I need some shopping.
                                    </Typography>
                                </div>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to={"/createshoppinglist"} >
                            <div className="delivery">
                                <div className="btn_txt">
                                    <Link to={"/accepteddelivery"} >
                                    <Typography variant="title" color="inherit">
                                        I want to shop for someone.
                                        </Typography>
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </Grid>
                </Grid>
                </div>
            </div>
            <div className="secondary">
                Create Your Shopping List!
                <img src="" />
            </div>
      </div>
    )
  }
};