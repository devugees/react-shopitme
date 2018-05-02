import React, { Component  } from 'react';
import TodoList from '../todo-list/TodoList';
import { Link } from 'react-router-dom';


const styles = {
      alignment:{
        position:"relative",
        left:"0"
      }
    }

export default class SingleOrderHistory extends Component {

      render() { 
      let orderStatus;
        switch(this.props.order.status)
          {
            case (this.props.order.status = 'Pending'):
              orderStatus = (
                <React.Fragment>
                  <p >Published: {this.props.order.created}</p>
                  <p>by - </p>
                </React.Fragment>
                )
              break;
            case (this.props.order.status = 'In Progress'):
              orderStatus = (
                <React.Fragment>
                  <p>Accepted: {this.props.order.accepted}</p>
                  <p>by <Link to="#">{this.props.order.deliverBy}</Link></p>
                </React.Fragment>
                )
              break;
            case (this.props.order.status = 'Delivered'):
              orderStatus = (
                <React.Fragment>
                  <p>Delivered: {this.props.order.delivered.date} at {this.props.order.delivered.time}</p>
                  <p>by <Link to="#">{this.props.order.deliverBy}</Link></p>
                </React.Fragment>
                )
              break;
          }    
        return (
          <React.Fragment style={styles.alignment}>
              <p><h1>{this.props.order.shop}</h1></p>
              {orderStatus}
              <p><h1>Order #{this.props.order.orderID}</h1></p>            
           <TodoList
            items={this.props.order.items}  checkingPerson={true}/>
          </React.Fragment>
        )
      }
    };