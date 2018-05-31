import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../landing/Landing'
import UserDetailsMiddleware from '../middlewares/UserDetailsMiddleware';
import AcceptSingleDelivery from '../master-components/AcceptSingleDelivery';
import CreateShoppingList from '../master-components/CreateShoppingList'
import AcceptedDelivery from '../master-components/AcceptedDelivery';
import OrderDeliveryHistory from '../master-components/OrderDeliveryHistory';
import MainDeliveryPage from '../master-components/MainDeliveryPage';
import NewPassword from '../master-components/NewPassord'
import Navbar from '../nav-bar/Navbar';
import Footer from '../Footer'
import NotFound from '../not-found/notFound'
// get main for testing
import Main from  '../Main';
import {Store} from '../../fakeStore';
import PrivateRoute from '../privateRoute';
// import jwtDecode from 'jwt-decode';


class Router extends Component {
    constructor(props) {
       super(props);
       this.state = {
        authed: false
         }
        
       }
       render() {
           return (
 <BrowserRouter>
    <React.Fragment>
    <Store.Consumer>
    {data =>(<Navbar updateUserData={data.updateUserData} /> )}
    </Store.Consumer>
    <Switch>
        <Route exact path='/' component={Landing} />
        <PrivateRoute exact path='/main' component={Main}  authenticated={this.state.authenticated} />
        <PrivateRoute exact path='/userdetails' component={UserDetailsMiddleware}  authed={this.state.authed} />
        <PrivateRoute exact path='/maindeliverypage' component={MainDeliveryPage}  authed={this.state.authed} />
        <PrivateRoute exact path='/acceptsingledelivery' component={AcceptSingleDelivery}  authed={this.state.authed} />
        <PrivateRoute exact path='/createshoppinglist' component={CreateShoppingList}  authed={this.state.authed} />
        <PrivateRoute exact path='/accepteddelivery' component={AcceptedDelivery}  authed={this.state.authed} />
        <PrivateRoute exact path='/orderdeliveryhistory' component={OrderDeliveryHistory}  authed={this.state.authed} />
        <Route exact path='/reset/*' component={NewPassword}  />
        <Route path="*" component={ NotFound } />
    </Switch>
    <Footer />
    </React.Fragment>
 </BrowserRouter>
    )
}
};

export default Router;

      
        
