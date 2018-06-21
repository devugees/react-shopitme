import React from 'react';
import {Paper, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  box:{
    background: '#fff',
    margin: '1rem auto',
    padding: '.5rem 0',
    margin: '1.5rem 1rem .5rem 1rem',
    textAlign:' left',
  },
  boxDone:{
    background: '#54b9b6',
    margin: '1rem auto',
    padding: '.5rem 0',
    margin: '1.5rem 1rem .5rem 1rem',
    textAlign:' left',
  },
  boxNotfound:{
    background: '#b33838',
    margin: '1rem auto',
    padding: '.5rem 0',
    margin: '1.5rem 1rem .5rem 1rem',
    textAlign:' left',
  }
};

const todoBoxShooper = props => {
  const { classes } = props;
  let tick = 'complete';
  let back = 'hide';
  let cross = 'cross';
  let boxColor = classes.box;
  let shopper = props.shooper
  let shopperUI;

  if(props.changeMe === 'done'){
    boxColor = classes.boxDone;
    tick = 'hide';
    back = 'back';
    cross = 'hide';
  }

  if(props.changeMe === 'notFound'){
    boxColor = classes.boxNotfound;
    tick = 'hide';
    back = 'back';
    cross = 'hide';
  }

  if(shopper){
    shopperUI = (
      <React.Fragment>
        <div className='editbuttons'>
          <span role="img" aria-label="tick" className={tick} onClick={props.productFound}>✔</span>
          <span role="img" aria-label="goBack" className={back} onClick={props.backToDo}>🔙</span>
          <span role="img" aria-label="cross" className={cross} onClick={props.productNotFound}>✖</span>
        </div>
      </React.Fragment>
    )
  }

  return (
    <div className={boxColor}>
    <p className="todoiteminner">
          {`#${props.index + 1}  `}
          {props.todo}
          {shopperUI}
          </p>
    </div>
  );
}

todoBoxShooper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(todoBoxShooper);