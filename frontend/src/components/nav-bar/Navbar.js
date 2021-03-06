import React from 'react';
import {AppBar, Toolbar, Button, Grid} from '@material-ui/core';
import './Navbar.css';
import DropMenu from './DropMenu';
import Login from '../Modals/Login';
import ResetPassword from '../Modals/ResetPassword'
import { Link } from 'react-router-dom';
import { crudAPI, randomNum } from '../../helpers/helpers'

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 2
  },
  bigAvatar: {
    width: 40,
    height: 40,
  },
  button: {
    height:'88px'
  },
  notifications: {
    fontSize:'26px',
    margin:".3rem"
  }
};

export default class NavBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      login: false,
      openLogin: false,
      openForgotpass :false,
      error: null,
      coords: {
        latitude: '',
        longitude: ''
      }
    }
  }

  LoginClickHandler = (e,params) => {
    e.preventDefault();
    crudAPI('post', '/login', params)
      .then(data => {
        if(data.error){
          this.setState({ error:data.error })
        } else {
          localStorage.setItem('token', data.token);
          const coords = this.state.coords
          delete data.user.password;
          delete data.user.resetPasswordExpires;
          delete data.user.resetPasswordToken;
          delete data.user.__v;
          data.user.coords = coords
          this.props.updateUserData(data.user)
          localStorage.setItem('userInfo', JSON.stringify(data.user));
          this.setState({
            data: data.user,
            error:null,
            login: true,
            openLogin: false,
            openForgotpass :false
          })
          this.props.handleLoginSuccess()
        }
    })
  }

  LogoutClickHandler = () => {
    localStorage.removeItem('geoPos');
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('profileData');
    this.setState({
      login: false,
      openLogin: false,
      openForgotpass :false,
    })
    this.props.logOut()
  }

  popupLogin = () => {
    this.setState({
      login: false,
      openLogin: true,
      openForgotpass :false
    })
  }

  popUpLoginClose = (currentStatus) => {
    this.setState({
      openLogin: currentStatus
    });
  }

  popupForgot = () => {
    this.setState({
      login: false,
      openLogin: false,
      openForgotpass :true

    })
  }

  popUpForgotClose = currentStatus => {
    this.setState({
      openForgotpass: currentStatus
    });
  }

  componentDidMount() {
    const userInfoLS = JSON.parse(localStorage.getItem('userInfo'))
    if(userInfoLS){
      this.props.updateUserData(userInfoLS)
      this.setState({
        data: userInfoLS,
        error:null,
        login: true,
        openLogin: false,
        openForgotpass :false
      })
    }
    this.geoId = navigator.geolocation.watchPosition(
      position => {
        this.setState({
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        })
      }
    );    
  }

  componentDidUpdate(){
    if (this.state.coords.latitude.length > 2){
      localStorage.setItem('geoPos', JSON.stringify(this.state.coords))
    } 
    const geoPos = localStorage.getItem('geoPos')
    if(!geoPos){
      const coords = {latitude:randomNum(52.513000,52.533000), longitude:randomNum(13.47000,13.50000)}
      localStorage.setItem('geoPos', JSON.stringify(coords))
    }
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.geoId);
  }

  render() {
  return (
    <div className="navbar">
      <div>
      <AppBar position="static" >
        <Toolbar>
          <Grid item xs={2} sm={2} >     
            <div className="logo">
              <Link to="/">Jibli</Link>
            </div>
          </Grid>
          {this.state.login ?
              ( <React.Fragment >
                  <Grid item xs={3} sm={7}>
                    <div></div>
                  </Grid>
                  <Grid item xs={7} sm={4}>
                    <i style={styles.notifications} className="material-icons">notifications</i>
                    <i style={styles.notifications} className="material-icons">chat_bubble_outline</i>
                    <DropMenu
                      style={styles.dropmenu}
                      logOut={this.LogoutClickHandler}
                      userName={this.state.data.firstname}
                      userPict={this.state.data.profileImgPath}
                    />
                  </Grid>
              </React.Fragment>
              ):
              (<React.Fragment>
                <Grid item xs={7} sm={7} >
                  <div>
                    
                  </div>
                </Grid> 
                <Grid item xs={3} sm={3} >
                  <Button
                    color="inherit"
                    onClick={(e) => this.setState({
                            openLogin: true,
                            openForgotpass :false})}
                  >
                    Login
                  </Button>
                </Grid> 
              </React.Fragment>)
            }
          </Toolbar>
        </AppBar>
        <Login ref={(ref) => this.login = ref} openLogin={this.state.openLogin}
          openForgotpassword={this.popupForgot}
          loginclick={this.LoginClickHandler}
          error={this.state.error}
          dataReceive={this.popUpLoginClose}
        /> 
        <ResetPassword
          ref={(ref) => this.resetpass = ref}
          openForgotpass={this.state.openForgotpass} 
          openLog={this.popupLogin}
          popUpForgotClose={this.popUpForgotClose}
        />
      </div>
    </div>
    );
  } 
}
