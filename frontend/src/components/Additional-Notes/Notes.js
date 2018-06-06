import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import './notes.css';

const styles = {
  paperP: {
    padding: '1rem 0.5rem'
  }
}

export default class TextFields extends Component {
  state ={
    inputValue:''
  }

  onChangeHandler = (event) => {
    const inputValue = event.target.value;
    //console.log(inputValue)
    this.setState({ inputValue })
    this.props.dataReceive(inputValue)
  }
    render() {
      let whatToRender = (<textarea onChange={this.onChangeHandler} className="textarea" rows="8"></textarea>);
      if (this.props.notes) {
        whatToRender = (
          <Paper onChange={this.onChangeHandler} className="textarea" rows="8" >
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