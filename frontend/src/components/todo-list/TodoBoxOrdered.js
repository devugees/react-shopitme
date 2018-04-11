import React from 'react';

const todoBoxOrdered = (props) => {
  let boxColor = 'box';
  let tick = 'hide';
  let edit = 'complete';
  let cross = 'cross';
  let todoInput = 'hide';
  let wrap = 'wrap';

  let editingText = props.todo + props.editing;

  if(props.changeMe === 'editMe'){
    boxColor = 'boxEdit';
    tick = 'complete';
    edit = 'hide';
    cross = 'cross';
    todoInput = 'todo-input';
    wrap = 'hide';
  }

  return (
    <div className={boxColor}>
      <span className={edit} onClick={props.editToDo}>✎</span>
      <span className={tick} onClick={props.finishEditToDo}>✔</span>
      <span className={cross} onClick={props.removeToDo}>✖</span>
      <p className={wrap}>{props.todo}</p>
      <input className={todoInput} type="text" value={editingText} onChange={props.editText}/>
    </div>
  )
}

export default todoBoxOrdered;