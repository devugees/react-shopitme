import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import avatar from '../../pictures/BoB.png';


const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center'

  },
  avatar: {
    margin: 5,
  },
  bigAvatar: {
    width: 40,
    height: 40,
  }

};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.avatar} />
      <p style={{padding:'0', fontSize:'0.7rem'}}>Alice</p>
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);