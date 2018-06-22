import React from 'react';
import {Paper, Button} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './index.css';


const styles = theme => ({
  p:{
    display: 'inline-block',
    padding: '0 7px 0 0',
    margin: '5px 0'
  },
  button:{
    margin: '0',
  },
  buttonDiv:{
    width:'18%',
  },
  textDiv:{
    width:'70%',
    display: 'inline-block',
  }
});

const deliverHistory = props => {
  const { classes } = props; 
  let shopper = (<p className={classes.p}><b>To:</b> - </p>)
  if(props.deliverHistory.orderer){
    shopper = (<p className={classes.p}><b>To: </b><a onClick={props.openUserProf}>{props.deliverHistory.orderer.firstname}</a></p>)
  }

  let deliverDate;
  switch(props.deliverHistory.status)
    {
      default:
      case ('Pending'):
        deliverDate = (<p className={classes.p}><b>Published:</b> {props.deliverHistory.created}</p>)
        break;
      case ('In Progress'):
        deliverDate = (<p className={classes.p}><b>Accepted:</b> {props.deliverHistory.accepted}</p>)
        break;
       case ('Delivered'):
        deliverDate = (<p className={classes.p}><b>Delivered:</b> {props.deliverHistory.delivered}</p>)
        break;
    }
  return (
    <div>
      <Paper className="paper" elevation={4}>
        <div className={classes.textDiv}>
          <p className={classes.p}>{props.deliverHistory.status}</p>
          <h3>{props.deliverHistory.ordername}</h3>
          {shopper}
          {deliverDate}
        </div>
        <div className={classes.buttonDiv}>
          <Button
            className={classes.button}
            variant="fab"
            aria-label="add"
            onClick={props.deliverMoreInfo}
          >
            <i class="material-icons">keyboard_arrow_right</i>
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
