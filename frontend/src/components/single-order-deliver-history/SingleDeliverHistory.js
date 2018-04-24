import React, { Component  } from 'react';
import TodoList from '../todo-list/TodoList'
import { Link } from 'react-router-dom';

const styles = {
      alignment:{
        position:"relative",
        left:"0"
      }
    }

export default class SingleDeliverHistory extends Component {

  render() {
    let deliverStatus;
        switch(this.props.deliver.status)
          {
            case (this.props.deliver.status = 'In Progress'):
              deliverStatus = (
                <React.Fragment>
                  <p>Accepted: {this.props.deliver.accepted}</p>
                  <p>To <Link to="#">{this.props.deliver.deliverTo}</Link></p>
                </React.Fragment>
                )
              break;
            case (this.props.deliver.status = 'Delivered'):
              deliverStatus = (
                <React.Fragment>
                  <p>delivered on {this.props.deliver.delivered.date} {this.props.deliver.delivered.time} </p>
                  <p>To <Link to="#">{this.props.deliver.deliverTo}</Link></p>
                </React.Fragment>
                )
              break;
          } 
    return (
      <React.Fragment style={styles.alignment}>
         
        <p><h1>{this.props.deliver.shop}</h1></p>
        {deliverStatus}
        <p> <h1> Order #{this.props.deliver.orderID} </h1></p>
         
       <TodoList
        items={this.props.deliver.items}  checkingPerson={true}/>
      </React.Fragment>

    )
  }
};