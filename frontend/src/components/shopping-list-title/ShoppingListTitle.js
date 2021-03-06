import React, { Component } from 'react';
import { Input, InputLabel, Paper, FormControl } from '@material-ui/core';

let listName;


export default class ShoppingListTitle extends Component {

  constructor(props){
    super(props);
    this.state = {
      listName: props.listName,
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
      },
      createdate: props.createdate
    }
  }

  static getDerivedStateFromProps(props, state) {
    let listName = props.listName
    let listId = props.listId
    let createdate = props.createdate
    let checkingPerson = props.checkingPerson
    return {listName ,listId ,createdate ,checkingPerson}
  }

  editingButton = () => {
    if (listName === ''){
      this.setState({listName : 'Order'})
    }
    this.setState(prevState => { return {editing: !prevState.editing}});
  }

  editText = event => {
    listName = event.target.value;
    this.setState({ listName } ,() => {this.props.dataReceive(this.state.listName)});
  }

  newShopper = () => {
    this.setState({
      isShopperAvailable: true,
    })
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.isShopperAvailable){
      return false
    }else if(nextState.shopper.name === '' || nextState.editing || !nextState.editing){
      return true
    }
  }

  render() {
    const style = {
    }

    let whatToRender = (
      <h1>{this.state.listName} #{this.state.listId} <span onClick={this.editingButton}>✎</span></h1> 
      )

    if(this.state.editing){
      whatToRender = (
        <h1>
          <FormControl className="todo-list-form">
            <InputLabel htmlFor="name-input">New List Name</InputLabel>
            <Input autoFocus className="todo-list-input" id="name-input" onChange={this.editText} value={this.state.listName} />
          </FormControl>
          <span className="edit" onClick={this.editingButton}>✔</span>
        </h1>
        )
    }
    let currentPerson = 'Pending...';
    let personTitle = 'Shopper';

    if(this.state.checkingPerson || this.state.shopperPerson){
      currentPerson = this.state.orderer.name
      personTitle = 'Orderer'
      whatToRender = (
      <h1>{this.state.listName}: #{this.state.listId}</h1> 
      )
      if(this.state.shopper.name !== undefined){
      this.setState({
        isShopperAvailable: true,
      })
      currentPerson = this.state.orderer.name
      }
    }

    return (
      <div className="shopping-list-title" >
          {whatToRender}
          <p>Created: {this.state.createdate}</p>
          <p>{personTitle}: {currentPerson}</p>
        
      </div>
    )
  }
};