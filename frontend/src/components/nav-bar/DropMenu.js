import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Fade, Chip, Avatar } from '@material-ui/core'; 
import avatar from '../../pictures/BoB.png';
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
    backgroundColor:'transparent',
  },
  link: {
    outline: 0,
    
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
          className="avatarchip" 
          avatar={this.props.userPict ?
            <Avatar className="avatarImg" style={styles.avatar} src={this.props.userPict}/>
            :
            <Avatar className="avatarImg" style={styles.avatar} src={avatar}/>
          } 
          label={this.props.userName.toUpperCase()} 
          onClick={this.handleClick} 
          style={styles.chip} 
        />
        <Menu style={styles.menuItem}
          id="fade-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          transition={Fade}
        >
          <Link to="/orderdeliveryhistory" style={styles.link}>
            <MenuItem
              onClick={this.handleClose} 
              onMouseEnter={(e) => e.target.style.color = 'lightblue'}
              onMouseLeave={(e) => e.target.style.color = 'black'}>
              History
            </MenuItem>
          </Link>
          <Link to="/userdetails">
            <MenuItem
              onClick={this.handleClose}
              onMouseEnter={(e) => e.target.style.color = 'lightblue'}
              onMouseLeave={(e) => e.target.style.color = 'black'}>
              Your Profile
            </MenuItem>
          </Link>
          <Link to="/">
            <MenuItem
              onClick={this.props.logOut}
              onMouseEnter={(e) => e.target.style.color = 'lightblue'}
              onMouseLeave={(e) => e.target.style.color = 'black'}>
              Logout
            </MenuItem>
          </Link>
        </Menu>
      </React.Fragment>
    );
  }
}
