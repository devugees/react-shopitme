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
    position:'relative',
    top: '-14px',
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
          <p className={classes.p}>#{props.order.orderer.listId}</p>
          <p className={classes.p}>from {props.order.deliveringTime.start} till {props.order.deliveringTime.end}</p>
          <p className={classes.p}>for {props.order.orderer.firstname} {props.order.orderer.lastname}</p>
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