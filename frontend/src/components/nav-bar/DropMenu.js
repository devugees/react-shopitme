import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Fade, Button, Chip, Avatar } from '@material-ui/core'; 
import Avatars from './Avatars';
import './Navbar.css';

const styles = {
  button:{ 
    padding: "0" 
  }, 
  menuItem:{
    position:"absolute",
    top:"2.3rem",
    color:'black'
  }, 
  chip:{ 
    margin: '0 0 0 1rem', 
    backgroundColor:'transparent' 
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
        <Chip 
          avatar={<Avatar>MB</Avatar>} 
          label={this.props.userName.toUpperCase()} 
          onClick={this.handleClick} 
          aria-owns={anchorEl ? 'fade-menu' : null} 
          aria-haspopup="true" 
          style={styles.chip} 
        /> 
        <Menu style={styles.menuItem}
          id="fade-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          transition={Fade}
        >
          <MenuItem onClick={this.handleClose}>
            <Link to="/orderdeliveryhistory">History</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link to="/userdetails">Your Profile</Link>
          </MenuItem>
          <MenuItem onClick={this.props.logOut}>
            <Link to="/">Logout</Link>
          </MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
}
