import React, { Component, Fragment } from 'react';
//import fake store

// import Select from 'material-ui/Select';

// import OrderDeliveryList from './OrderDeliveryList'
import fakeStore from '../../fakeStore';
// import Map from '../map/Map';
import MainDeliveryLists from '../MainDeliveryList/MainDeliveryLists';


export default class MainDeliveryPage extends Component {

  state = {
   
    ...fakeStore,
    
  }
  
render(){
  
      return(
        <Fragment>
<MainDeliveryLists />
          </Fragment>
        )
    }
  
  }
