import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Avatar} from '@material-ui/core';
import avatar from '../../pictures/BoB.png';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    margin: 0,
  },
  bigAvatar: {
    width: 40,
    height: 40,
  },
  userName: {
    padding:'0',
    fontSize:'0.7rem'
  }
};

const Avatars = props => {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.avatar} />
      <p className={classes.userName}>{props.userName}</p>
    </div>
  );
}

Avatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Avatars);