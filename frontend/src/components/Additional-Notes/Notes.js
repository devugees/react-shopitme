import React, { Component } from 'react';

import './notes.css';

export default class TextFields extends Component {
    render() {  
      return (
      <div className="notes">
        <h4>Notes:</h4>
        <textarea className="textarea" rows="8">
        {this.props.notes}
        </textarea>
      </div>
    );
  }
}