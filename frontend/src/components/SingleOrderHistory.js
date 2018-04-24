import React, { Component  } from 'react';
import TodoList from './todo-list/TodoList'
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

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
              <p><a  href="#">Back to Order History</a></p>
              <p>delivered on {this.props.order.delivered.date} {this.props.order.delivered.time} </p>
              <p>by <a href="#"> {this.props.order.deliverBy}</a></p>
              <p> <h1> Order #{this.props.order.orderID} </h1></p>
              
           <TodoList
            items={this.props.order.items}  checkingPerson={true}/>
          </React.Fragment>
          
      
   
        )
      }
    };