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
    ...fakeStore,
    openSureModal:false,
    order: {
      deliveringTime:{
        start: '',
        end: ''
      },
      items:[],

      shop:'',
      notes: '',
      createdate:'',
      orderName: '',
      orderer: {
        firstname: fakeStore.userInfo.firstname,
        lastname: fakeStore.userInfo.lastname,
        location:{
          street:fakeStore.userInfo.location.street,
          number:fakeStore.userInfo.location.number,
          postcode:fakeStore.userInfo.location.postcode,
          city:fakeStore.userInfo.location.city
        },
        email:fakeStore.userInfo.email,
        mobile:fakeStore.userInfo.mobile,
        gender:fakeStore.userInfo.gender,
        password:'',
        coords:{
          lat:fakeStore.userInfo.coords.lat,
          lng:fakeStore.userInfo.coords.lng
           }

      }
    
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

  grabDataDetails = (details) => {
    this.setState({
      order:{ ...this.state.order,
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
    //console.log(this.state)
  }

   grabDataNotes = (notes) => {
    this.setState({
      order:{...this.state.order, notes}
    });
    console.log('notes')
  }

  sendDataToServer= ()=> {
    console.log(this.state.order);
   // authCrudAPI("post",'', this.state.order) // waiting to handle request from server
  }




    render() {
     console.log(this.state.orderer)

    const style = {
      margin: '1rem 0.5rem 0 0.5rem',
    }
      return (

        <div className="createShoppingList main">
          <ShoppingListTitle dataReceive={this.grabDataShoppingListTitle} listName={this.state.listName} listId={this.state.listId} checkingPerson={false} />
          <TodoList dataReceive={this.grabDataDoList} orderPerson={true}  items={this.state.items}/>
          <Details dataReceive={this.grabDataDetails} />
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