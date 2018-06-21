import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

const styles = {
  paperP: {
    padding: '1rem 0.5rem'
  }
}

export default class TextFields extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: props.noteBody
    }
  }

  static getDerivedStateFromProps(props, state) {
    let inputValue = props.noteBody
    return {inputValue}
  }

  onChangeHandler = (event) => {
    const inputValue = event.target.value
    this.setState({ inputValue })
    this.props.dataReceive(inputValue)
  }
  render() {
    let whatToRender = (
      <textarea onChange={this.onChangeHandler} value={this.state.inputValue} className="notes-ta" rows="8"></textarea>
    );
    if (this.props.notes) {
      whatToRender = (
        <div onChange={this.onChangeHandler} className="notes-area">
         {this.props.notes}
        </div>
      )
    } 
    return (
    <div className="notes">
      <h4>Notes:</h4>
      {whatToRender}
    </div>
    );
  }
}