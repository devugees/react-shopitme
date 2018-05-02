import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';


const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const timeHours = date.getHours();
let timeMin = date.getMinutes();
const zeroMonth = (month > 9) ? (month) : ('0' + month);
const zeroMin = (timeMin > 9) ? (timeMin) : ('0' + timeMin);
const zeroDay = (day > 9) ? (day) : ('0' + day);

export default class ShoppingListTitle extends Component {

  constructor(props){
    super(props);
    this.state = {
      listName: 'Order',
      listId: props.listId,
      editing: false,
      isShopperAvailable: false,
      orderPerson:props.orderPerson,
      checkingPerson: props.checkingPerson,
      shopperPerson:props.shopperPerson,
      orderer: {
        name: props.ordererName,
        accountPage: props.ordererAccountPage
      },
      shopper: {
        name: props.shopperName,
        accountPage: props.shopperAccountPage
      }
    }
  }
 
  
  editingButton = () => {
    console.log('editing');
      this.setState(prevState => { return {editing: !prevState.editing}})
  }

  editText = event => {
    const listName = event.target.value;
    this.setState({ listName })
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
    const style = {
      padding: '0.1rem 0'
    }

    let whatToRender = (
      <h1>{this.state.listName}: #{this.state.listId} <span onClick={this.editingButton}>✎</span></h1> 
      )

    if(this.state.editing){
      whatToRender = (
        <h1>
          <FormControl className="todo-list-form">
            <InputLabel htmlFor="name-input">New List Name</InputLabel>
            <Input autoFocus className="todo-list-input" id="name-input" onChange={this.editText} value={this.state.listName} />
          </FormControl>
          <span onClick={this.editingButton}>✔</span>
        </h1>
        )
    }
    let shopper = 'Pending...';

    if(this.state.checkingPerson || this.state.shopperPerson){
      whatToRender = (
      <h1><a href={this.state.orderer.accountPage}>{this.state.orderer.name}'s </a><br/>{this.state.listName}: #{this.state.listId}</h1> 
      )
      if(this.state.shopper.name !== null){
      this.setState({
        isShopperAvailable: false,
      })
      shopper = (<a href={this.state.shopper.accountPage}>{this.state.shopper.name}</a>)
      }
    }

    return (
      <div className="shopping-list-title" >
        <Paper style={style}>
          {whatToRender}
          <p>Created: {zeroDay}/{zeroMonth}/{year} {timeHours}:{zeroMin}</p>
          <p>Shopper: {shopper}</p>
        </Paper>
      </div>
      )
  }
};