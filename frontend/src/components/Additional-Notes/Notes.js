import React, { Component } from 'react';

import './notes.css';

export default class TextFields extends Component {
  state ={
    inputValue:''
  }

  onChangeHandler = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue)
    this.setState({
      inputValue,
    }), this.props.dataReceive(this.state.inputValue)
  }
    render() {
      let whatToRender = (<textarea onChange={this.onChangeHandler} className="textarea" rows="8"></textarea>);
      if (this.props.notes) {
        whatToRender = (<textarea onChange={this.onChangeHandler} className="textarea" rows="8" value={this.props.notes} readOnly></textarea>)
      } 
      return (
      <div className="notes">
        <h4>Notes:</h4>
        {whatToRender}
      </div>
    );
  }
}