import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

const styles = {
  paperP: {
    padding: '1rem 0.5rem'
  },
  textarea: {
    width:'100%',
    display: 'block'
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
      <textarea onChange={this.onChangeHandler} value={this.state.inputValue} style={styles.textarea} rows="8"></textarea>
    );
    if (this.props.notes) {
      whatToRender = (
        <Paper onChange={this.onChangeHandler} style={styles.textarea} rows="8" >
          <p style={styles.paperP}>{this.props.notes}</p>
        </Paper>
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