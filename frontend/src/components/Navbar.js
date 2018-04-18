import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/Menu';
import '../css/Navbar.css';
import DropMenu from './DropMenu';
import Grid from 'material-ui/Grid';




 class ButtonAppBar extends React.Component {
  constructor(props) {
    super();
 
    this.state = {
      login: false
    };
  }

  LoginClickHandler = () => {
    this.setState({
      login: true
    })
  }

  LogoutClickHandler = () => {
    this.setState({
      login: false
    })
  }

  render() {
  return (
    <div className="navbar">
      <div>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit" >
              <a href="/">ShopMeIt</a>
            </Typography>
          {this.state.login?
              (<React.Fragment>
                <Button color="inherit" onClick={this.LogoutClickHandler}> Logout</Button>
                <i class="material-icons">notifications</i>
                <i class="material-icons">chat_bubble_outline</i>
                <i class="material-icons">perm_identity</i>
                <DropMenu/>
              </React.Fragment>) :
              (<React.Fragment>
                <Button color="inherit" onClick={this.LoginClickHandler}>Login</Button>
              </React.Fragment>) }
        </Toolbar>
      </AppBar>
    </div>
  </div>
  );
} }


export default ButtonAppBar;