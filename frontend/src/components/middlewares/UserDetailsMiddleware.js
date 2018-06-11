import React from 'react';
import UserDetails from '../master-components/UserDetails';
import {Store} from '../../fakeStore';

const UserDetailsMiddleware = () => {
  return (
    <Store.Consumer>
      {data =>(
        <UserDetails
          updateUserData={data.updateUserData}
          updateUserPicture={data.updateUserPicture}
        />)}
    </Store.Consumer>
    )
}
    
export default UserDetailsMiddleware;