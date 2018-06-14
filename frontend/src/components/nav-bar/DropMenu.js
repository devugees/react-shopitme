import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Fade } from '@material-ui/core';
import Avatars from './Avatars';
import './Navbar.css';

const styles = {
  button:{padding: "0"},
  menuItem:{
    position:"absolute",
    top:"2.3rem",
    color:'black'
  },
  link:{
    outline: 0
  }
}

export default class DropMenu extends React.Component {
  state = {
    anchorEl: null,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state;
  
    return (
      <React.Fragment>
        <Button style={styles.button}
          aria-owns={anchorEl ? 'fade-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Avatars userName={this.props.userName}/>
        </Button>
        <Menu style={styles.menuItem}
          id="fade-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          transition={Fade}
        >
        <Link to="/orderdeliveryhistory" style={styles.link}>
          <MenuItem onClick={this.handleClose}>
          History
          </MenuItem>
          </Link>
          <Link to="/userdetails">
          <MenuItem onClick={this.handleClose}>
            Your Profile
          </MenuItem>
          </Link>
          <Link to="/">
          <MenuItem onClick={this.props.logOut}>
           Logout
          </MenuItem>
          </Link>
        </Menu>
      </React.Fragment>
    );
  }
}
