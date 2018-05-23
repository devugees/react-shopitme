import React from 'react';
import {Input, InputLabel, FormControl, Typography, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  box:{
    background: '#fff',
    margin: '1rem auto',
    padding: '.5rem 0',
  }
};

const todoBoxOrdered = (props) => {
  const { classes } = props;
  let tick = 'hide';
  let edit = 'complete';
  let cross = 'cross';
  let wrap = 'wrap';
  let whatToShow = props.todo;

  if(props.changeMe === 'editMe'){
    tick = 'complete';
    edit = 'hide';
    cross = 'cross';
    wrap = 'hide';
    whatToShow = (
      <FormControl className="todo-list-form">
        <InputLabel htmlFor="name-input">Edit Shopping List</InputLabel>
        <Input autoFocus className="todo-list-input" id="name-input" onChange={props.editText} value={props.todoState} />
      </FormControl>
      )
  }

  return (
    <div>
      <Paper className={classes.box} elevation={4}>
        <Typography className={wrap}>
          {`#${props.index + 1}  `}
          {whatToShow}
          <span className={edit} onClick={props.editToDo}>✎</span>
          <span className={tick} onClick={props.finishEditToDo}>✔</span>
          <span className={cross} onClick={props.removeToDo}>✖</span>
        </Typography>
      </Paper>
    </div>
  );
}

todoBoxOrdered.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(todoBoxOrdered);
