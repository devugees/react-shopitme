import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../todo-list/TodoList';
import ShoppingListTitle from '../shopping-list-title/ShoppingListTitle';
import Notes from '../Additional-Notes/Notes';
import { Button } from '@material-ui/core'
import Details from '../Details/Details';
import Sure from '../Modals/Sure';
//import fake store
import fakeStore from '../../fakeStore';
import { authCrudAPI } from '../../helpers/helpers'

export default class CreateShoppingList extends Component {

  state = {
      ...fakeStore.userInfo,
      openSureModal:false,
      order: {
        deliveringTime:{
          start: '',
          end: ''
        },
        items: fakeStore.items,
    
        shop:'',
        notes: '',
        createdate:'',
        orderName: '',
      }
}
  


 
  openCloseModal = () => {
    this.setState(prevState => {return {openSureModal: !prevState.openSureModal}});
  }

  sendback = () => {
    this.setState({openSureModal: false})
  }

  grabDataShoppingListTitle = (orderName,createdate) => {
    this.setState({
      order:{...this.state.order,
       orderName,createdate}

    });
  }

  grabDataDoList = (items) => {
    //console.log(items)
    this.setState({
      order:{...this.state.order, items}
    });
  }

  grabDataDetails = (details,shop) => {
    this.setState({
      order:{ ...this.state.order,
        shop,
        orderer:{
          location:{
            street:details.street,
            number: details.number,
            postcode: details.postcode,
            city: details.city
          }

        }
      }
    })
  }

  grabDataNotes = (notes) => {
    this.setState({
      order:{...this.state.order, notes}
    });
  }

  

  grabDataStartDelivering = (startTime) => {
    let order = {...this.state.order}
    order.deliveringTime.start = startTime
    this.setState({
      order:{...order}
    });
  }

  grabDataEndDelivering = (endTime) => {
   let order = {...this.state.order}
    order.deliveringTime.end = endTime
    this.setState({
      order:{...order}
    });
  }

  sendDataToServer= ()=> {
    //console.log(this.state.order);
    this.props.updateOrderData(this.state.order);
    authCrudAPI("post",'http://localhost:4000/user/createshoppinglist', this.state.order).then(date=>console.info(date))
    //console.log(fakeStore)
  }

  render() {
    // console.log('fakeStore.items[0]',fakeStore.items[0])
    // console.log('fake store', fakeStore);
    // console.log("this is the state",this.state)
    // console.log(this.state.order)
    const style = {
      margin: '1rem 0.5rem 0 0.5rem',
    }
    return (

      <div className="createShoppingList main">
        <ShoppingListTitle dataReceive={this.grabDataShoppingListTitle} listName={this.state.listName} listId={this.state.listId} checkingPerson={false} />
        <TodoList dataReceive={this.grabDataDoList} orderPerson={true}  items={this.state.order.items}/>
        <Details
          grabDataStartDelivering={this.grabDataStartDelivering}
          dataReceive={this.grabDataDetails}
          grabDataEndDelivering={this.grabDataEndDelivering}
           />
          
        <Notes dataReceive={this.grabDataNotes} />
        <Button
          style={style}
          variant="raised"
          color="secondary"
          onClick={this.openCloseModal}
        >
          Delete
        </Button>
        <Button onClick={this.sendDataToServer}style={style} variant="raised" color="primary">
          <Link to="/">Create</Link>
        </Button>
        <Sure sendback={this.sendback} open={this.state.openSureModal}/>
      </div>
    )
  }
};