import React from 'react';
import {Typography, Paper} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  deliver:{
    width:'48%',
    display: 'inline-block',
    margin: '1rem auto',
    padding: '.5rem 0',
  },
  delivering:{
    width:'48%',
    display: 'inline-block',
    margin: '1rem auto',
    padding: '.5rem 0',
  }
};

const ShowDeliveryDetails = (props) => {
const { classes } = props;

  return (
    <div className="show-delivery-details">
      <Paper elevation={4}>
        <Typography className={classes.deliver}>
          Deliver Adress:<br/>
          {props.deliverAdress.street} {props.deliverAdress.number},<br/>
          {props.deliverAdress.postalCode} {props.deliverAdress.city}.
        </Typography>
        <Typography className={classes.delivering}>
          Delivering between:<br/>
          <br/>
          {props.deliveringTime.start} until {props.deliveringTime.end}
        </Typography>
      </Paper>
    </div>
  );
}


ShowDeliveryDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowDeliveryDetails);