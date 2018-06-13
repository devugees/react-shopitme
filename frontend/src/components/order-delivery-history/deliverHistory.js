import React from 'react';
import {Paper, Button} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  p:{
    display: 'inline-block',
    padding: '0 7px 0 0',
    margin: '5px 0'
  },
  paper:{
    margin: '1rem 0',
    padding: '5px'
  },
  button:{
    margin: '0',
    position:'relative'
  },
  buttonDiv:{
    width:'18%',
    display: 'inline-block',
  },
  textDiv:{
    width:'70%',
    display: 'inline-block',
  }
});

const deliverHistory = props => {
  const { classes } = props; 
  let shopper = (<p className={classes.p}>To: - </p>)
  if(props.deliverHistory.deliverTo){
    shopper = (<p className={classes.p}>To: {props.deliverHistory.deliverTo}</p>)
  }

  let deliverDate;
  switch(props.deliverHistory.status)
    {
      default:
      case ('Pending'):
        deliverDate = (<p className={classes.p}>Published: {props.deliverHistory.created}</p>)
        break;
      case ('In Progress'):
        deliverDate = (<p className={classes.p}>Accepted: {props.deliverHistory.accepted}</p>)
        break;
     /*  default:
        deliverDate = (<p className={classes.p}>Delivered: {props.deliverHistory.delivered.date}</p>)
        break; */
    }
  return (
    <div>
      <Paper className={classes.paper} elevation={4}>
        <div className={classes.textDiv}>
          <p className={classes.p}>{props.deliverHistory.status}</p>
          <p className={classes.p}>{props.deliverHistory.shop}</p>
          {shopper}
          {deliverDate}
        </div>
        <div className={classes.buttonDiv}>
          <Button
            className={classes.button}
            variant="fab"
            color="primary"
            aria-label="add"
            onClick={props.deliverMoreInfo}
          >
            <i class="material-icons">forward</i>
          </Button>          
        </div>
      </Paper>
    </div>
  )
}

deliverHistory.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(deliverHistory);
