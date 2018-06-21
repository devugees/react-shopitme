import React, { Component } from 'react';
import TodoList from '../todo-list/TodoList';
import ShoppingListTitle from '../shopping-list-title/ShoppingListTitle';
import Notes from '../Additional-Notes/Notes';
import {Button} from '@material-ui/core'
import Details from '../Details/Details';
import Sure from '../Modals/Sure';
import ConfirmationMessage from '../confirmation-message';
//import fake store
import fakeStore from '../../fakeStore';
import {authCrudAPI, createdate, year, timeHours, timeMin, zeroMonth, zeroDay } from '../../helpers/helpers';


export default class CreateShoppingList extends Component {
  constructor(props) {
    super()
    let importData;
    if(localStorage.getItem('userInfo')){
      const userInfoLS = JSON.parse(localStorage.getItem('userInfo'))
      importData ={...userInfoLS}
    } else {
      importData ={...fakeStore.userInfo}
    }

    this.state = {
      userInfo: importData,
      openSureModal:false,
      openConfirmationMessage: false,
      dataToConfirmationMessage:'',
      order: {
        deliveringTime: {
          start: `${year}-${zeroMonth}-${zeroDay}T${timeHours}:${timeMin}`,
          end: `${year}-${zeroMonth}-${zeroDay}T${timeHours + 3}:${timeMin}`
        },
        items: fakeStore.items,
        shop: '',
        notes: '',
        createdate: createdate,
        ordername: 'Order Name',
        orderID: '',
        deliverAdress:{
          street:importData.location.street,
          number: importData.location.number,
          postcode: importData.location.postcode,
          city: importData.location.city
        }
      }
    }
  }

  componentDidMount(props, state) {
    let order = {...this.state.order}
    if(this.props.editOrder) {
      order.ordername = this.props.editOrder.ordername
      order.orderID = this.props.editOrder.orderID
      order.createdate = this.props.editOrder.createdate
      order.deliveringTime = this.props.editOrder.deliveringTime
      order.deliverAdress = this.props.editOrder.deliverAdress
      order.items = this.props.editOrder.items
      order.shop = this.props.editOrder.shop
      order.notes = this.props.editOrder.notes
      this.setState({
        order
      })
    } else {
      fetch(`/user/generateorderID`)
        .then( response =>response.json())
        .then( data => 
          this.setState(prevState => ({
            order: {
                ...prevState.order,
                orderID: data.orderID
            }
          }))
        )
        .catch(error => {
          console.log(error);
        });
    }
  }
  
  cancelDeleteHandler = () => {
    if(this.props.editing) {
      const id = this.props.editOrder._id;
      authCrudAPI('DELETE', '/user/deleteshoppinglist/' + id)
      .then(data => {
        if(!data.error){
          // if OK let a confirmation message popup
          this.openConfirmationMessage(data.message)
          // If successfull send data to the Store
          // this.props.updateOrderData(this.state.order);
        } else {
          this.openConfirmationMessage(data.error)
        }
      })
    } else {
      this.setState(prevState => {
        return {
          openSureModal: !prevState.openSureModal
        }
      });
    } 
  }

  sendback = () => {
    this.setState({openSureModal: false})
  }

  grabDataShoppingListTitle = (ordername) => {
    this.setState({
      order:{...this.state.order,
       ordername}
    });
  }

  grabDataDoList = items => {
    this.setState({
      order: {
        ...this.state.order,
        items
      }
    });
  }

  grabDataDetails = (details, shop) => {
    this.setState({
      order: {
        ...this.state.order,
        shop,
        deliverAdress:{
          street: details.street,
          number: details.number,
          postcode: details.postcode,
          city: details.city
        }
      }
    })
  }

  grabDataNotes = notes => {
    this.setState({
      order: {
        ...this.state.order,
        notes
      }
    });
  }

  grabDataStartDelivering = startTime => {
    let order = {
      ...this.state.order
    }
    order.deliveringTime.start = startTime
    this.setState({
      order: {
        ...order
      }
    });
  }

  grabDataEndDelivering = endTime => {
    let order = {
      ...this.state.order
    }
    order.deliveringTime.end = endTime
    this.setState({
      order: {
        ...order
      }
    });
  }

  sendDataToServer = () => {
    // if this props is editing - select corresponding API Call
    if(this.props.editing) {
      // 1. Collect the Data of the Order and send it to the Store
      // this.props.updateOrderData(this.state.order);
      // 2. Send the Data to the Database
      const id = this.props.editOrder._id;
      const newOrder = this.state.order;
      authCrudAPI('PUT', '/user/updateshoppinglist/' + id, newOrder)
      .then(data => {
        if(!data.error){
          // if OK let a confirmation message popup
          this.openConfirmationMessage(data.message);
          // If successfull send data to the Store
          //this.props.updateOrderData(this.state.order);
        } else {
          this.openConfirmationMessage(data.error)
        }
      })
    } else {
    
      // 1. Send the Data to the Database
      // this.props.updateOrderData(this.state.order);

      authCrudAPI('POST','/user/createshoppinglist', this.state.order)
        .then(data => {
          if(!data.error){
            // if OK let a confirmation message popup
            this.openConfirmationMessage(data.message)
            // If successfull send data to the Store
          } else {
            this.openConfirmationMessage(data.error)
          }
        })
      .catch(error => console.log(error));
    } 
  }

  openConfirmationMessage = dataToConfirmationMessage => {
    this.setState({openConfirmationMessage:true, dataToConfirmationMessage})
  }

  closeConfirmationMessage  = () => {
    this.setState({openConfirmationMessage:false, dataToConfirmationMessage:''},window.history.back())
  }

  render() {
    const style = {
      margin: '1rem 0.5rem 0 0.5rem'
    }

    return (
      <div className="createShoppingList main">
        <ShoppingListTitle
          dataReceive={this.grabDataShoppingListTitle}
          listName={this.state.order.ordername}
          listId={this.state.order.orderID}
          createdate={this.state.order.createdate}
          checkingPerson={false}
          />
        <TodoList
          dataReceive={this.grabDataDoList}
          orderPerson={true}
          items={this.state.order.items}
          />
        <Details
          grabDataStartDelivering={this.grabDataStartDelivering}
          grabDataEndDelivering={this.grabDataEndDelivering}
          dataReceive={this.grabDataDetails}
          start={this.state.order.deliveringTime.start}
          end={this.state.order.deliveringTime.end}
          shop={this.state.order.shop}
          deliverAdress={this.state.order.deliverAdress}
          />
        <Notes
          dataReceive={this.grabDataNotes}
          noteBody={this.state.order.notes}
          />
        <div className="buttons">
        <Button
          style={style}
          className="delete-btn"
          variant="outlined"
          color="secondary"
          onClick={this.cancelDeleteHandler}
        >
        {this.props.editing ? 'Delete' : 'Cancel'}
        </Button>

        <Button onClick={this.sendDataToServer} style={style} variant="outlined" className="create-btn">
          {this.props.editing ? 'Update' : 'Create'}
        </Button>
        </div>
        <Sure sendback={this.sendback} open={this.state.openSureModal}/>
        <ConfirmationMessage
          openConfirmationMessage={this.state.openConfirmationMessage}
          dataToConfirmationMessage={this.state.dataToConfirmationMessage}
          closeConfirmationMessage={this.closeConfirmationMessage}
        />
      </div>
    )
  }
};