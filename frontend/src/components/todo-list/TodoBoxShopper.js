import React from 'react';

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