import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../landing/Landing'
import UserDetails from '../master-components/UserDetails'
import AcceptSingleDelivery from '../master-components/AcceptSingleDelivery';
import CreateShoppingList from '../master-components/CreateShoppingList'
import AcceptedDelivery from '../master-components/AcceptedDelivery'
import Modals from '../Modals/Modals'
import Login from '../Modals/Login'
import ResetPassword from '../Modals/ResetPassword'
import Sure from '../Modals/Sure'
// get main for testing
import Main from  '../Main';

const Router = () => (
 <BrowserRouter>
   <Switch>
{/*notfound*/}
    <Route exact path='/' component={Landing} />
    <Route exact path='/main' component={Main} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/resetpassword' component={ResetPassword} />
    <Route exact path='/sure' component={Sure} />
    <Route exact path='/userdetails' component={UserDetails} />
    <Route exact path='/acceptsingledelivery' component={AcceptSingleDelivery} />
    <Route exact path='/createshoppinglist' component={CreateShoppingList} />
    <Route exact path='/accepteddelivery' component={AcceptedDelivery} />
   </Switch>
 </BrowserRouter>

 );

export default Router;