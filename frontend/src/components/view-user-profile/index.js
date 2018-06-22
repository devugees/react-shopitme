import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField }from '@material-ui/core';
import { Button, Dialog, AppBar, Toolbar, IconButton, Typography, Slide} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Avatar from '../avatar/image';
import RatingStars from '../RatingStars'
import defaultAvatar from '../../pictures/BoB.png';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class viewUserProfile extends React.Component {
  constructor(props){
    super()
    this.state = {
      open: props.openProfile,   
    };
  }

  static getDerivedStateFromProps(props, state){
    const profileData = JSON.parse(localStorage.getItem('profileData'))
   if(props.open){
     return { open: props.open, profileData};
   }
   return null
  }

  render() {
    let pictToShow
    const { classes } = this.props;
    const { profileData } = this.state;
    if(profileData){
      pictToShow = profileData.profileImgPath ? profileData.profileImgPath : defaultAvatar
    }
    return (
      <div>
        <Dialog
          fullScreen
          open={this.props.open}
          onClose={this.props.closeProfile}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.props.closeProfile} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                User Profile
              </Typography>
              <Button color="inherit" onClick={this.props.closeProfile}>
                Close
              </Button>
            </Toolbar>
          </AppBar>
          <div className='main'>
          <div className='accountInfo'>
            <Avatar imgSrc={pictToShow}/>
          <RatingStars userInfo={profileData} rating={profileData ? profileData.ratingstars : null}/>
          </div>
          
            <TextField
              id='firstname'
              label='Firstname'
              margin="normal"
              fullWidth
              value={profileData ? profileData.firstname : 'null'}
            />
            <TextField
              id='lastname'
              label='Lastname'
              margin="normal"
              fullWidth
              value={profileData ? profileData.lastname : 'null'}
            />
            <TextField
              id='gender'
              label='Gender'
              value={profileData ? profileData.gender : 'null'}
              margin="normal"
              fullWidth
            />
            <TextField
              id='orders'
              label='Orders Created'
              value={profileData ? profileData.orderHistory : 'null'}
              margin="normal"
              fullWidth
            />
            <TextField
              id='delivers'
              label='Orders Delivered'
              value={profileData ? profileData.deliveryHistory : 'null'}
              margin="normal"
              fullWidth
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

viewUserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(viewUserProfile);
