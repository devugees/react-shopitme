import React, { Component  } from 'react';
import TodoList from '../todo-list/TodoList';
import { Link } from 'react-router-dom';


const styles = {
      alinment:{
        position:"relative",
        left:"0"
      }
    }

export default class SingleOrderHistory extends Component {

      render() {
        console.log("sdfsdfsdf",this.props)
        return (
          <React.Fragment style={styles.alinment}>
             
              <p><h1>{this.props.order.shop}</h1></p>
              <p><Link to="#">Back to Order History</Link></p>
              <p>delivered on {this.props.order.delivered.date} {this.props.order.delivered.time} </p>
              <p>by <Link to="#">{this.props.order.deliverBy}</Link></p>
              <p> <h1> Order #{this.props.order.orderID} </h1></p>
              
           <TodoList
            items={this.props.order.items}  checkingPerson={true}/>
          </React.Fragment>
          
      
   
        )
      }
    };