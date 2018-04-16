import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../../App'
import UserDetails from '../UserDetailsPage'
import Modals from '../Modals/Modals'
import Login from '../Modals/Login'
import ResetPassword from '../Modals/ResetPassword'
import Sure from '../Modals/Sure'


const Router = () => (
 <BrowserRouter>
   <Switch>
    <Route exact path='/' component={App} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/resetpassword' component={ResetPassword} />
    <Route exact path='/sure' component={Sure} />
    <Route exact path='/userdetails' component={UserDetails} />
   </Switch>
 </BrowserRouter>

 );

export default Router;