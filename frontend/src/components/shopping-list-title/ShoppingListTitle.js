import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';


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
      listId: props.listId,
      editing: false,
      isShopperAvailable: false,
      shopper: {
        noShopper: 'Pending...',
        name: props.name,
        accountPage: props.accountPage
      }
    }
  }
 
  
  editing = () =>{
      this.setState(prevState => { return {editing: !prevState.editing}})
  }

  editText = event => {
    this.setState({
      listName:event.target.value
    })
  }

  newShopper = () => {
    this.setState({
      isShopperAvailable: true,
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.shopper.name === ''){
      return true
    }else {
      return false
    }
  }

  render() {
    let whatToRender = (
      <h1>{this.state.listName}: #{this.state.listId} <span onClick={this.editing}>✎</span></h1> 
      )
    if(this.state.editing){
      whatToRender = (
        <h1>
          <FormControl className="todo-list-form">
            <InputLabel htmlFor="name-input">New List Name</InputLabel>
            <Input autoFocus className="todo-list-input" id="name-input" onChange={this.editText} value={this.state.listName} />
          </FormControl>
          <span onClick={this.editing}>✔</span>
        </h1>
        )
    }

    let shopper = this.state.shopper.noShopper;

    if(this.state.shopper.name !== ''){
      this.setState({
        isShopperAvailable: false,
      })
      shopper = (<a href={this.state.shopper.accountPage}>{this.state.shopper.name}</a>)
    }

    return (
      <div className="shopping-list-title" >
        <Paper>
          {whatToRender}
          <p>Created: {day}/{zeroMonth}/{year} {timeHours}:{zeroMin}</p>
          <p>Shopper: {shopper}</p>
        </Paper>
      </div>
      )
  }
};