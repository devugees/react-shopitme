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

const ShowDeliveryDetails = props => {
const { classes } = props;
  return (
    <div className="details">
        <div className="deliveryDetails">
        <span className="address">Pickup Shop:</span> {props.shop}
        </div>
        <div class="time-date">
        <div className="deliveryDetails">
          <span className="address">Deliver Address:</span>
          {props.deliverAdress.street} {props.deliverAdress.number},<br/>
          {props.deliverAdress.postcode} {props.deliverAdress.city}.
        </div>
        <div className="deliveryDetails">
        <span className="address">Delivering between:</span>
          {props.deliveringTime.start.replace('T', ' ')} <b>and</b> {props.deliveringTime.end.replace('T', ' ')}
        </div>
        </div>
    </div>
  );
}

ShowDeliveryDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowDeliveryDetails);