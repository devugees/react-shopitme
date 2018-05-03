import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/Menu';
import './Navbar.css';
import DropMenu from './DropMenu';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import avatar from '../../pictures/BoB.png';
import Login from '../Modals/Login';
import ResetPassword from '../Modals/ResetPassword'
import { Link } from 'react-router-dom';



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
    fontSize:'1.8rem',
    verticalAlign:"middle",
    margin:".3rem"
  }
};


export default class ButtonAppBar extends React.Component {
  constructor(props) {
    super();
 
    this.state = {
      login: false,
      openLogin: false,
      openForgotpass :false
    };
  }


  LoginClickHandler = () => {
    this.setState({
      login: true,
      openLogin: false,
      openForgotpass :false
    });
  }

  LogoutClickHandler = () => {
    this.setState({
      login: false,
      openLogin: false,
      openForgotpass :false

    })
  }

  popupLogin = () => {
    this.setState({
      login: false,
      openLogin: true,
      openForgotpass :false

    })
  }

  popupForgot = () => {
    this.setState({
      login: false,
      openLogin: false,
      openForgotpass :true

    })
  }


  render() {
  return (
    <div className="navbar">
      <div>
      <AppBar position="static" >
        <Toolbar>
          <Grid item xs={2} sm={2} >     
            <div >
              <Link to="/">ShopItMe</Link>
            </div>
          </Grid>

          {this.state.login?
              ( <React.Fragment >
                  <Grid item xs={4} sm={4} >
                    <div></div>
                  </Grid>
                  <Grid  item xs={6} sm={6} >
                    <i  style={styles.notifications} class="material-icons">notifications</i>
                    <i  style={styles.notifications} class="material-icons">chat_bubble_outline</i>
                    <DropMenu logOut={this.LogoutClickHandler} />
                  
                  </Grid>
                </React.Fragment>
               ):
              (<React.Fragment>
                <Grid item xs={7} sm={7} >
                  <div>
                    
                  </div>
                </Grid> 
                <Grid item xs={3} sm={3} >
                  <Button color="inherit" onClick={(e) => this.setState({openLogin: true})}>Login</Button>
                </Grid> 
              </React.Fragment>) }
        </Toolbar>
      </AppBar>
      <Login ref={(ref) => this.login = ref} openLogin={this.state.openLogin}
        openForgotpassword={this.popupForgot}
        loginclick={this.LoginClickHandler}
      /> 
      <ResetPassword ref={(ref) => this.resetpass = ref} openForgotpass={this.state.openForgotpass}
        openLog={this.popupLogin}
      />
    </div>
  </div>
  );
} }
