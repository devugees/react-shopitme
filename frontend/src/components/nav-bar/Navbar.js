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
      <AppBar position="static" >
        <Toolbar>
          <Grid item xs={2} sm={2} >     
            <div style={styles.row}>
            <a href="/">
              <Avatar style={styles.avatar} alt="Remy Sharp" src={avatar}  />
            </a>
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
                  <Button color="inherit" onClick={this.LoginClickHandler}>Login</Button>
                </Grid> 
              </React.Fragment>) }
        </Toolbar>
      </AppBar>
    </div>
  </div>
  );
} }


export default ButtonAppBar;