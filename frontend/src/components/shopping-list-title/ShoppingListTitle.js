import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const date =new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const timeHours = date.getHours();
let timeMin = date.getMinutes();
const zeroMonth = (month > 9) ? (month) : ('0' + month);
const zeroMin = (timeMin > 9) ? (timeMin) : ('0' + timeMin);

export default class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      listName: 'Shopping List',
      listId: '3321'
    }
  }
  
  editListName = event => {
    this.setState({
      listName:event.target.value
    })
  }

  render() {
    return (
      <div className="shopping-list-title" >
        <Paper>
          <h1>{this.state.listName}: #{this.state.listId} <span onClick={this.editListName}>✎</span></h1>
          <p>Created: {day}/{zeroMonth}/{year} {timeHours}:{zeroMin}</p>
        </Paper>
      </div>
      )
  }
};