import React from 'react';
import {Paper, Button} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './deliveryList.css';


const styles = theme => ({
  p:{
    display: 'inline-block',
    padding: '0 7px 0 0',
    margin: '5px 0'
  },
  paper:{
    margin: '.5rem 0',
    padding: '0 .5rem', 
  },
  highlight:{
    backgroundColor:'#54b9b6',
    margin: '.5rem 0',
    padding: '0 .5rem'
  },
  buttonDiv:{
    width:'18%',
    display: 'inline-block',
    position: 'relative'
  },
  button:{
    margin: '0',
    transform: 'translateY(-50%)',
  },
  textDiv:{
    width:'70%',
    display: 'inline-block',
  }
});

const deliveryList = props => {
const { classes } = props;
  return (
    <div className="orders">
      <Paper className={props.highlight ? "highlight" : "paper"} elevation={4}>
        <div className={classes.textDiv} onClick={props.highlightMarker}>
          <h3>{props.order.ordername} <b>#</b> {props.order.orderID}</h3>
          <p className={classes.p}><b>From: </b> {props.order.deliveringTime.start.replace('T', ' ')}</p>
          <p className={classes.p}><b>Till: </b> {props.order.deliveringTime.end.replace('T', ' ')}</p>
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