import React, { Component } from 'react';

import './notes.css';

export default class TextFields extends Component {
  constructor(props){
    super(props);
    this.state = {
      noteText: props.noteText,
    }
  }
    render() {
      let whatToRender = (<textarea className="textarea" rows="8">{this.state.noteText}</textarea>);
      return (
      <div className="notes">
        <h4>Notes:</h4>
        {whatToRender}
      </div>
    );
  }
}