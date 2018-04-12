import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
    box:{
      background: '#fff',
      margin: '1rem auto',
      padding: '.5rem 0',
    },
    boxDone:{
      background: '#54b9b6',
      margin: '1rem auto',
      padding: '.5rem 0',
    },
    boxNotfound:{
      background: '#b33838',
      margin: '1rem auto',
      padding: '.5rem 0',
    }
};

const todoBoxShooper = (props) => {
  const { classes } = props;
  let tick = 'complete';
  let back = 'hide';
  let cross = 'cross';
  let boxColor = classes.box;

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

  return (
    <div>
      <Paper className={boxColor} elevation={4}>
        <Typography>
          {props.todo}
          <span className={tick} onClick={props.productFound}>✔</span>
          <span className={back} onClick={props.backToDo}>🔙</span>
          <span className={cross} onClick={props.productNotFound}>✖</span>
        </Typography>
      </Paper>
    </div>
  );
}

todoBoxShooper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(todoBoxShooper);

/*

const todoBoxShooper = (props) => {
  let boxColor = 'box';
  let tick = 'complete';
  let back = 'hide';
  let cross = 'cross';

  if(props.changeMe === 'done'){
    boxColor = 'boxDone';
    tick = 'hide';
    back = 'back';
    cross = 'hide';
  }

  if(props.changeMe === 'notFound'){
    boxColor = 'not-found';
    tick = 'hide';
    back = 'back';
    cross = 'hide';
  }

  return (
    <div className={boxColor}>
      <span className={tick} onClick={props.productFound}>✔</span>
      <span className={back} onClick={props.backToDo}>🔙</span>
      <span className={cross} onClick={props.productNotFound}>✖</span>
      <p className="wrap">{props.todo}</p>
    </div>
  )
}

export default todoBoxShooper;
*/