import React, { Component } from 'react';

import './notes.css';

export default class TextFields extends Component {
    render() {
      let whatToRender = (<textarea className="textarea" rows="8"></textarea>);
      if (this.props.notes) {
        whatToRender = (<textarea className="textarea" rows="8" value={this.props.notes} readOnly></textarea>)
      } 
      return (
      <div className="notes">
        <h4>Notes:</h4>
        {whatToRender}
      </div>
    );
  }
}