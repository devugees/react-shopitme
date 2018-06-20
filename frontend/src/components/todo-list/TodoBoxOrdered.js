import React from 'react';
import {Input, InputLabel, FormControl, Typography, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  box:{
    
  }
};

const todoBoxOrdered = props => {
  const { classes } = props;
  let tick = 'hide';
  let edit = 'complete';
  let cross = 'cross';
  let wrap = 'wrap';
  let whatToShow = props.todo;

  if(props.changeMe === 'editMe'){
    tick = 'complete';
    edit = 'hide';
    cross = 'hide';
    wrap = 'hide';
    whatToShow = (
      <FormControl className="todo-list-form">
        <InputLabel htmlFor="name-input">Edit Shopping List</InputLabel>
        <Input autoFocus className="todo-list-input" id="name-input" onChange={props.editText} value={props.todoState} />
      </FormControl>
    )
  }

  return (
    <div className="todoitem">
      {/* <Paper className={classes.box} elevation={2}> */}
        <p className="todoiteminner">
        {/* <Typography className={wrap}> */}
          {`#${props.index + 1}  `}
          {whatToShow}
        {/* </Typography> */}
        <div className="editbuttons">
          <span className={edit} onClick={props.editToDo}>✎</span>
          <span className={tick} onClick={props.finishEditToDo}>✔</span>
          <span className={cross} onClick={props.removeToDo}>✖</span>
        </div>
        </p>
      {/* </Paper> */}
    </div>
  );
}

todoBoxOrdered.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(todoBoxOrdered);
