import React, { Component  } from 'react';
import TodoList from './todo-list/TodoList'
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom';

  const styles = {
    alinment:{
      position:"relative",
      left:"0"
    }
  }

export default class SingleOrderHistory extends Component {

  render() {
    return (
      <React.Fragment style={styles.alinment}>
          <p><h1>{this.props.order.shop}</h1></p>
          <p><Link to="/orderdeliveryhistory">Back to Order History</Link></p>
          <p>delivered on {this.props.order.delivered.date} {this.props.order.delivered.time} </p>
          <p>by <a href="#"> {this.props.order.deliverBy}</a></p>
          <p> <h1> Order #{this.props.order.orderID} </h1></p>
       <TodoList
        items={this.props.order.items}  checkingPerson={true}/>
      </React.Fragment>
    )
  }
};