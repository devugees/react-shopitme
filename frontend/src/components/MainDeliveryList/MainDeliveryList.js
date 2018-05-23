import React  from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';



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
  }
});

const MainDeliveryList = (props) => {
const { classes } = props; 
  return (
    <div>
      <Paper className={classes.paper} elevation={4}>
      <div className={classes.textDiv}>   
      #{props.mainDeliveryList.orderId} from: {props.mainDeliveryList.deliveringTime.start}  
      to: {props.mainDeliveryList.deliveringTime.end}
      <br/> {props.mainDeliveryList.shop} <br/>
      for: {props.mainDeliveryList.firstname} {props.mainDeliveryList.lastname} {props.mainDeliveryList.rating} {props.mainDeliveryList.deliveringTime.date}

    </div>
    <div className={classes.buttonDiv}>
          <Button className={classes.button} variant="fab" color="primary" aria-label="add" onClick={props.orderMoreInfo}><i class="material-icons">forward</i> 
         </Button>          
        </div>
      </Paper>
    </div>
  );
}

MainDeliveryList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainDeliveryList);


