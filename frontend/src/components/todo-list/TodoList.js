import React, { Component } from 'react';

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
      alternate:true,
    }
  }

  alternate = () =>{
      this.setState(prevState => { return {alternate: !prevState.alternate}})
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
    this.setState({todo: items[index][0]})
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
    items[index][1] = 'box';
    if(this.state.editing !== ''){
      items[index][0] = this.state.todo;
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
    items[index][1] = 'notFound';
    console.log(`Not found: ${items[index][0]}`);
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
    let changingTodo = (this.state.items.map((item, index) => <TodoBoxShopper todo={item[0]} key={index} changeMe={item[1]} productFound={()=>{this.productFound(index)}} productNotFound={()=>{this.productNotFound(index)}} backToDo={()=>{this.backToDo(index)}}/>))
    
    if(this.state.alternate){
      changingTodo = (this.state.items.map((item, index) => <TodoBoxOrdered todo={item[0]} key={index} changeMe={item[1]} editToDo={()=>{this.editToDo(index)}} finishEditToDo={()=>{this.finishEditToDo(index)}} removeToDo={()=>{this.removeToDo(index)}} editText={this.editText} todoState={this.state.todo}/>))
    }

    return (
      <div className="todo-list">
        <h1>Shopping list</h1>
        <button onClick={this.alternate}>Shopper/Order Switch</button>
        <div className="todo-list-form">
          <input onChange={this.changeText} value={this.state.todo}/>
          <button disabled={this.state.disabled} onClick={this.sendToDo}>{this.state.disabled ? 'Write a Product' : 'Add Product'}</button>
        </div>
        {changingTodo}
      </div>
    )
  }
};
