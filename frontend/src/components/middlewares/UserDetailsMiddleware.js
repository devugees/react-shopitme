import React from 'react';
import UserDetails from '../master-components/UserDetails';
import {Store} from '../../fakeStore';

const UserDetailsMiddleware = () => {
    return (
    <Store.Consumer>
    {data =>(<UserDetails updateUserData={data.updateUserData}/>)}
    </Store.Consumer>
    )
}
    
export default UserDetailsMiddleware;