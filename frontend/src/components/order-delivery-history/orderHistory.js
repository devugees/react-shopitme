import React from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
  p:{
    background: '#aaa',
    margin: '1rem auto',
    padding: '.5rem 0',
  }
};

const orderHistory = (props) => {
const { classes } = props; 
  return (
    <div>
      <Paper elevation={4}>
        <Typography>
          {/*<p>orderID: {props.orderHistory.orderID}</p>*/}
          <p className={classes.p}>{props.orderHistory.status}</p>
          <p className={classes.p}>{props.orderHistory.shop}</p>
          <p className={classes.p}>By: {props.orderHistory.deliverBy}</p>
          {/*<p>created: {props.orderHistory.created}</p>*/}
          <p className={classes.p}>delivered: {props.orderHistory.delivered.date}</p>
          {/*<p>delivered time: {props.orderHistory.delivered.time}</p>*/}
          <Button className="todo-list-button" variant="raised" onClick={props.moreInfo}>Info</Button>
        </Typography>
      </Paper>
    </div>
  );
}

orderHistory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(orderHistory);
