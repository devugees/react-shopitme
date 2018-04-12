import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

// import Components
import TodoBoxShopper from './TodoBoxShopper';
import TodoBoxOrdered from './TodoBoxOrdered';

// import CSS
import './TodoList.css';

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo:'',
      items:[],
      disabled: true,
      orderPerson:true,
    }
  }
  orderPerson = () =>{
      this.setState(prevState => { return {orderPerson: !prevState.orderPerson}})
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
    this.setState({todo: items[index].todo})
    if(this.state.todo = ''){
      return
    }
    this.setState({ items });
  }

  editText = event => {
    this.setState({
      todo:event.target.value
    })
  }

  finishEditToDo = index => {
    const items = [...this.state.items];
    items[index].status = 'box';
    if(this.state.editing !== ''){
      items[index].todo = this.state.todo;
    }
    this.setState({ items, todo:'' });
  }

  removeToDo = index => {
    const items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items, todo:'' });
  }

  productNotFound = index => {
    const items = [...this.state.items];
    items[index].status = 'notFound';
    console.log(`Not found: ${items[index].todo}`);
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
    this.setState( prevState => {return {
      items: [...prevState.items, {todo:prevState.todo,status:'box'}],
      todo: '',
      disabled: true,
    }})
  }

  render() {
    let changingTodo = (this.state.items.map((item, index) => <TodoBoxShopper todo={item.todo} key={index} changeMe={item.status} productFound={()=>{this.productFound(index)}} productNotFound={()=>{this.productNotFound(index)}} backToDo={()=>{this.backToDo(index)}}/>))
    
    if(this.state.orderPerson){
      changingTodo = (this.state.items.map((item, index) => <TodoBoxOrdered todo={item.todo} key={index} changeMe={item.status} editToDo={()=>{this.editToDo(index)}} finishEditToDo={()=>{this.finishEditToDo(index)}} removeToDo={()=>{this.removeToDo(index)}} editText={this.editText} todoState={this.state.todo}/>))
    }

    return (
      <div className="todo-list">
        <h1>Shopping list</h1>
        <button onClick={this.orderPerson}>Shopper/Order Switch</button>
        <FormControl className="todo-list-form">
          <InputLabel htmlFor="name-input">Add Item</InputLabel>
          <Input className="todo-list-input" id="name-input" onChange={this.changeText} value={this.state.todo} />
        </FormControl>
        <Button className="todo-list-button" variant="raised" disabled={this.state.disabled} onClick={this.sendToDo}>{this.state.disabled ? 'Write' : 'Add'}
        </Button>
        {changingTodo}
      </div>
    )
  }
};