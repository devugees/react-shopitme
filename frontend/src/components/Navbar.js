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
import DropMenu from './DropMenu'


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


 class ButtonAppBar extends React.Component {
  constructor(props) {
    super();
 
    this.state = {
      login: true
    };
  }
  render() {
  return (
    <div className="navbar">
      <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton  color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" >
              <a href="/">ShopMeIt</a>
          </Typography>
          {this.state.login?
                  (<React.Fragment>
                     <i class="material-icons">notifications</i>
                     <i class="material-icons">chat_bubble_outline</i>
                     <i class="material-icons">perm_identity</i>
                     <DropMenu/>
                   </React.Fragment>) :
                  (<React.Fragment>
                            <Button color="inherit">Login</Button>
          <Button color="inherit">Logout</Button></React.Fragment>) }
        </Toolbar>
      </AppBar>
    </div>
  </div>
  );
} }


export default ButtonAppBar;