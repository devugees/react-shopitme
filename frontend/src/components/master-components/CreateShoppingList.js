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

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const timeHours = date.getHours();
let timeMin = date.getMinutes();
const zeroMonth = (month > 9) ? (month) : ('0' + month);
const zeroMin = (timeMin > 9) ? (timeMin) : ('0' + timeMin);
const zeroDay = (day > 9) ? (day) : ('0' + day);


export default class CreateShoppingList extends Component {
  constructor(props){
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
      order: {
        deliveringTime:{
          start: '',
          end: ''
        },
        items: fakeStore.items,
        shop:'',
        notes: '',
        createdate:'',
        orderName: 'Order',
        orderer:{
          location:{
            street:importData.location.street,
            number: importData.location.number,
            postcode: importData.location.postcode,
            city: importData.location.city
          },
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

  grabDataDoList = items => {
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

  grabDataNotes = notes => {
    this.setState({
      order:{...this.state.order, notes}
    });
  }

  grabDataStartDelivering = startTime => {
    let order = {...this.state.order}
    order.deliveringTime.start = startTime
    this.setState({
      order:{...order}
    });
  }

  grabDataEndDelivering = endTime => {
    let order = {...this.state.order}
    order.deliveringTime.end = endTime
    this.setState({
      order:{...order}
    });
  }

  sendDataToServer= ()=> {
    this.props.updateOrderData(this.state.order);
    //Updating user Adress, waiting for the sabine fix with empty pass
    /*const userInfo = {...this.state.userInfo}
    userInfo.location = this.state.order.orderer.location
    authCrudAPI('PUT','/user/changeuserdetails', userInfo.location)
      .then(data => console.log(data))*/
    console.log('info sended',this.state.order)
    authCrudAPI('POST','/user/createshoppinglist', this.state.order)
      .then(data => console.info(data))
  }

  render() {
    const style = {
      margin: '1rem 0.5rem 0 0.5rem',
    }
    return (
      <div className="createShoppingList main">
        <ShoppingListTitle
          dataReceive={this.grabDataShoppingListTitle}
          listName={this.state.listName} 
          listId={this.props.editing ? this.props.editOrder.orderID : this.state.listId}
          checkingPerson={false}
          creatingDate={this.props.editing ? this.props.editOrder.created : `${zeroDay}/${zeroMonth}/${year} ${timeHours}:${zeroMin}`}
        />
        <TodoList
          dataReceive={this.grabDataDoList}
          orderPerson={true} 
          items={this.props.editing ? this.props.editOrder.items : this.state.order.items}
        />
        <Details
          grabDataStartDelivering={this.grabDataStartDelivering}
          grabDataEndDelivering={this.grabDataEndDelivering}
          dataReceive={this.grabDataDetails}
          start={this.props.editing ? this.props.editOrder.deliveringTime.start : ''}
          end={this.props.editing ? this.props.editOrder.deliveringTime.end : ''}
          shop={this.props.editing ? this.props.editOrder.shop : this.state.shop}
          deliverAdress={this.props.editing ? {...this.props.editOrder.deliverAdress} : {...this.state.deliverAdress} }
        />
        <Notes
          dataReceive={this.grabDataNotes}
          noteText={this.props.editing ? this.props.editOrder.notes : ''}
        />
        <Button
          style={style}
          variant="raised"
          color="secondary"
          onClick={this.openCloseModal}
        >
        {this.props.editing ? 'Delete' : 'Cancel'}
        </Button>
        <Button onClick={this.sendDataToServer} style={style} variant="raised" color="primary">
            <Link to="/">{this.props.editing ? 'Update' : 'Create'}</Link> 
        </Button>
        <Sure sendback={this.sendback} open={this.state.openSureModal}/>
      </div>
    )
  }
};