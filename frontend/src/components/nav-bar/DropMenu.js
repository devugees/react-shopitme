import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Fade } from '@material-ui/core';
import Avatars from './Avatars';


const styles = {
  padding: "0"
}

export default class FadeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    anchorEl: null,
    };
  }


  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
    //this.props.history.push('/main')

  };

  render(props) {
    const { anchorEl } = this.state;

    return (
      <React.Fragment>
        <Button style={styles}
          aria-owns={anchorEl ? 'fade-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
        <Avatars/>
    
        </Button>
        <Menu style={{position:"absolute" ,top:"2.3rem"}}
          id="fade-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          transition={Fade}
        >
            <MenuItem onClick={this.handleClose}><Link to="/orderdeliveryhistory">History</Link></MenuItem>
            <MenuItem onClick={this.handleClose}><Link to="/userdetails">Your Profile</Link></MenuItem>
            <MenuItem onClick={this.props.logOut}>Logout</MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
}

