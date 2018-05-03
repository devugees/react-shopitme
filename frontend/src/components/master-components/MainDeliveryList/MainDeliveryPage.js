import React, { Component, Fragment } from 'react';
//import fake store
import fakeStore from '../../../fakeStore';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'




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
    top: 0,
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
const MainDerliveryPage = (props) => {
  const { classes } = props; 

return(
  <Fragment>
          <Paper className={classes.paper} elevation={4} >
          {/*<div className={classes.textDiv}>
          #{props.listId} from:{props.deliveringTime} to:{props.deliveringTime}{props.orderHistory.shop}<br/>
         for:{props.orderers.firstname}{props.orderers.lastname}{props.rating} {props.deliveringTime}``
         </div>*/}
         <div className={classes.buttonDiv}>
          <Button className={classes.button} onClick={props.orderMoreInfo} variant="fab" color="primary" aria-label="add" >
         <i class="material-icons">forward</i> 
          </Button>          
        </div>
        </Paper>
       </Fragment>
        );
      }

MainDerliveryPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MainDerliveryPage);
