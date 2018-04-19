import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const orderHistory = (props) => {
  
  return (
    <div>
      <Paper elevation={4}>
        <Typography>
          <p>{props.orderID}</p>
        </Typography>
      </Paper>
    </div>
  );
}

export default orderHistory;
 