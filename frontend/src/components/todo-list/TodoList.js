import React, { Component } from 'react';
import { Input, InputLabel, Button, FormControl } from '@material-ui/core';
// import Components
import TodoBoxShopper from './TodoBoxShopper';
import TodoBoxOrdered from './TodoBoxOrdered';
//import helpers from '../../helpers/helpers'

// import CSS
import './TodoList.css';

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo:'',
      editTodo:'',
      items:props.items, //came from Store
      disabled: true,
      orderPerson:props.orderPerson,
      checkingPerson: props.checkingPerson,
      shopperPerson:props.shopperPerson
    }
  }

  static getDerivedStateFromProps(props, state) {
    let items = props.items
    let orderPerson = props.orderPerson
    return {items ,orderPerson}
    }

  changeText = event => {
    const disabled = event.target.value.length === 0;
    this.setState({
      todo:event.target.value,
      disabled
    })
  }

  editToDo = index => {
    const items = [...this.state.items];
    items[index].status = 'editMe';
    this.setState({editTodo: items[index].todo})
    if(this.state.todo === ''){
      return
    }
    this.setState({ items });
  }

  editText = event => {
    this.setState({
      editTodo:event.target.value
    })
  }

  finishEditToDo = index => {
    const items = [...this.state.items];
    items[index].status = 'box';
    if(this.state.editing !== ''){
      items[index].todo = this.state.editTodo;
    }
    this.setState({ items, editTodo:'' });
  }

  removeToDo = index => {
    const items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items, todo:'' });
  }

  productNotFound = index => {
    const items = [...this.state.items];
    items[index].status = 'notFound';
    this.setState({ items });
  }

  productFound = index => {
    let items = [...this.state.items];
    items[index].status = 'done';
    this.setState({ items });
  }

  backToDo = index => {
    let items = [...this.state.items];
    items[index].status = '';
    this.setState({ items });
  }

  sendToDo = () => {
    this.setState( prevState => {
    this.props.dataReceive([...prevState.items, {todo:prevState.todo,status:'box'}])
      return {
      items: [...prevState.items, {todo:prevState.todo,status:'box'}],
      todo: '',
      disabled: true,
    }
  })
    
  }

  render() {
    let changingTodo;
    let whatToShow;
    if(!this.state.items) {
      console.log('empty')
    } else {
      if(this.state.shopperPerson || this.state.checkingPerson){
        changingTodo = (this.state.items.map((item, index) => (
          <TodoBoxShopper
            index={index}
            shooper={this.state.shopperPerson}
            todo={item.todo}
            key={index}
            changeMe={item.status}
            productFound={()=>{this.productFound(index)}}
            productNotFound={()=>{this.productNotFound(index)}}
            backToDo={()=>{this.backToDo(index)}}
          />
          )
        ))
      }
    }
    if(this.state.orderPerson){
      const editTodoLng = this.state.editTodo.length
      whatToShow = (
        <React.Fragment>
          
          <div className="todo-input-gr">
          <FormControl className="todo-list-form">
            <InputLabel htmlFor="name-input">Add Item</InputLabel>
            <Input
              className="todo-list-input"
              id="name-input"
              onChange={this.changeText}
              value={this.state.todo}/>
          </FormControl>
          <Button
            className="todo-list-button"
            variant="raised"
            disabled={this.state.disabled}
            onClick={this.sendToDo}>{this.state.disabled ? 'Write' : 'Add'}
          </Button>
        </div>
        </React.Fragment>
      )
      changingTodo = (this.state.items.map((item, index) => (
        <TodoBoxOrdered
          index={index}
          todo={item.todo}
          key={index}
          changeMe={item.status}
          editToDo={editTodoLng > 0 ? null : ()=>{this.editToDo(index)}}
          finishEditToDo={()=>{this.finishEditToDo(index)}}
          removeToDo={()=>{this.removeToDo(index)}}
          editText={this.editText}
          todoState={this.state.editTodo}
          checking={this.state.checkingPerson}
        />
      )))
    }
    return (

      <div className="todo-list">
      <h2 className="items">Your Shopping List:</h2>
        {whatToShow}
      <div className="the-list">
        {changingTodo}
        </div>
      </div>

    )
  }
};
