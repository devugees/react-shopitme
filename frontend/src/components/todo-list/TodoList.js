import React, { Component } from 'react';

// import Components
//import TodoBoxShopper from './TodoBoxShopper';
import TodoBoxOrdered from './TodoBoxOrdered';

// import CSS
import './TodoList.css';

export default class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      todo:'',
      editing:'',
      items:[],
      disabled: true,
    }
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
    items[index][1] = 'editMe';
    if(this.state.editing = ''){
      return
    }
    this.setState({ items });
  }

  editText = event => {
    this.setState({
      editing:event.target.value
    })
  }

  finishEditToDo = index => {
    const items = [...this.state.items];
    items[index][1] = 'box';
    if(this.state.editing !== ''){
      items[index][0] = this.state.editing;
    }
    this.setState({ items, editing:'' });
  }

  /* editToDo = index => {
    if(this.state.disabled){
      return
    }
    const items = [...this.state.items];
    items[index][0] = this.state.todo
    this.setState({ items, todo: '', disabled: true });
  } */

  removeToDo = index => {
    const items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items });
  }

  productNotFound = index => {
    const items = [...this.state.items];
    items[index][1] = 'notFound';
    this.setState({ items });
  }

  productFound = index => {
    let items = [...this.state.items];
    items[index][1] = 'done';
    this.setState({ items });
  }

  backToDo = index => {
    let items = [...this.state.items];
    items[index][1] = '';
    this.setState({ items });
  }

  sendToDo = () => {
    this.setState( prevState => {return {
      items: [...prevState.items, [prevState.todo,'box']],
      todo: '',
      disabled: true,
    }})
  }

  render() {
    return (
      <div className="todo-list">
        <h1>Todo list</h1>
        <div className="todo-list-form">
          <input onChange={this.changeText} value={this.state.todo}/>
          <button disabled={this.state.disabled} onClick={this.sendToDo}>{this.state.disabled ? 'Write a Product' : 'Add Product'}</button>
        </div>
        {this.state.items.map((item, index) => <TodoBoxOrdered todo={item[0]} key={index} changeMe={item[1]} editToDo={()=>{this.editToDo(index)}} finishEditToDo={()=>{this.finishEditToDo(index)}} removeToDo={()=>{this.removeToDo(index)}} editText={this.editText} editing={this.state.editing}/>)}
        {/*this.state.items.map((item, index) => <TodoBoxShopper todo={item[0]} key={index} changeMe={item[1]} productFound={()=>{this.productFound(index)}} productNotFound={()=>{this.productNotFound(index)}} backToDo={()=>{this.backToDo(index)}}/>)*/}
      </div>
    )
  }
};