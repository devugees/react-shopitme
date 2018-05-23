import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../landing/Landing'
import UserDetails from '../master-components/UserDetails'
import AcceptSingleDelivery from '../master-components/AcceptSingleDelivery';
import CreateShoppingList from '../master-components/CreateShoppingList'
// import AcceptedDelivery from '../master-components/AcceptedDelivery';
import OrderDeliveryHistory from '../master-components/OrderDeliveryHistory'
import Navbar from '../nav-bar/Navbar';
import Footer from '../Footer'
import NotFound from '../not-found/notFound'
// get main for testing
import Main from  '../Main';

const Router = () => (
 <BrowserRouter>
    <React.Fragment>
    <Navbar />
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/main/acceptsingledelivery' component={AcceptSingleDelivery} />
        <Route exact path='/userdetails' component={UserDetails} />
        <Route exact path='/acceptsingledelivery' component={AcceptSingleDelivery} />
        <Route exact path='/createshoppinglist' component={CreateShoppingList} />
        <Route exact path='/orderdeliveryhistory' component={OrderDeliveryHistory} />
        <Route path="*" component={ NotFound } />
    </Switch>
    <Footer />
    </React.Fragment>
 </BrowserRouter>

 );

export default Router;