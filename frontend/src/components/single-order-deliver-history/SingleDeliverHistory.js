import React, { Component  } from 'react';
import TodoList from '../todo-list/TodoList'

const styles = {
      alinment:{
        position:"relative",
        left:"0"
      }
    }

export default class SingleDeliverHistory extends Component {

  render() {
    return (
      <React.Fragment style={styles.alinment}>
         
        <p><h1>{this.props.deliver.shop}</h1></p>
        <p><a  href="#">Back to Order History</a></p>
        <p>delivered on {this.props.deliver.delivered.date} {this.props.deliver.delivered.time} </p>
        <p>by <a href="#"> {this.props.deliver.deliverTo}</a></p>
        <p> <h1> Order #{this.props.deliver.orderID} </h1></p>
          
       <TodoList
        items={this.props.deliver.items}  checkingPerson={true}/>
      </React.Fragment>

    )
  }
};