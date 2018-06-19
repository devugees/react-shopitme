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
                <p>delivered on {this.props.deliver.delivered}</p>
                <p>To {this.props.deliver.orderer.firstname}</p>
              </React.Fragment>
              )
            break;
          default:
            deliverStatus =(<p>No info available</p>);
        } 
    return (
      <div style={styles.alignment}>
        <h1>{this.props.deliver.shop}</h1>
        {deliverStatus}
        <h1> Order #{this.props.deliver.orderID}</h1>
       <TodoList
        items={this.props.deliver.items}  checkingPerson={true}/>
      </div>

    )
  }
};