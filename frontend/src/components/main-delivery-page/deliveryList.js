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
  },
  highlight:{
    backgroundColor:'#54b9b6',
    margin: '1rem 0',
    padding: '5px'
  }
});

const deliveryList = props => {
const { classes } = props;
  return (
    <div>
      <Paper className={props.highlight ? classes.highlight : classes.paper} elevation={4}>
        <div className={classes.textDiv} onClick={props.highlightMarker}>
          <p className={classes.p}>{props.order.ordername} <b>#</b> {props.order.orderID}</p>
          <p className={classes.p}><b>From: </b> {props.order.deliveringTime.start.replace('T', ' ')} <b>Till: </b> {props.order.deliveringTime.end.replace('T', ' ')}</p>
          <p className={classes.p}> <b>For: </b> {props.order.orderer.firstname} {props.order.orderer.lastname}</p>
        </div>
        <div className={classes.buttonDiv}>
          <Button
            className={classes.button}
            variant="fab"
            color="primary"
            aria-label="add"
            onClick={props.deliverMoreInfo}
          >
            <i className="material-icons">forward</i>
          </Button>          
        </div>
      </Paper>
    </div>
  );
}

deliveryList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(deliveryList);