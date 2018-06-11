import React from 'react';
import CreateShoppingList from '../master-components/CreateShoppingList';
import {Store} from '../../fakeStore';

const CreateShoppingListMiddleware = () => {
  return (
    <Store.Consumer>
      {data =>(<CreateShoppingList updateOrderData={data.updateOrderData}/>)}
    </Store.Consumer>
  )
}
    
export default CreateShoppingListMiddleware;