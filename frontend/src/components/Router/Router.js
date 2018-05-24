import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../landing/Landing'
import UserDetails from '../master-components/UserDetails'
import AcceptSingleDelivery from '../master-components/AcceptSingleDelivery';
import CreateShoppingList from '../master-components/CreateShoppingList'
import AcceptedDelivery from '../master-components/AcceptedDelivery';
import OrderDeliveryHistory from '../master-components/OrderDeliveryHistory'
import MainDeliveryPage from '../master-components/MainDeliveryPage'
import Navbar from '../nav-bar/Navbar';
import Footer from '../Footer'
import NotFound from '../not-found/notFound'
// get main for testing
import Main from  '../Main';
import {FakeStoreContext} from '../../fakeStore';

const Router = () => (
 <BrowserRouter>
    <React.Fragment>
    <FakeStoreContext.Consumer>
    {data =>(<Navbar uploadUserData={data.updateStore}/>)}
    </FakeStoreContext.Consumer>
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/userdetails' component={UserDetails} />
        <Route exact path='/maindeliverypage' component={MainDeliveryPage} />
        <Route exact path='/acceptsingledelivery' component={AcceptSingleDelivery} />
        <Route exact path='/createshoppinglist' component={CreateShoppingList} />
        <Route exact path='/accepteddelivery' component={AcceptedDelivery} />
        <Route exact path='/orderdeliveryhistory' component={OrderDeliveryHistory} />
        <Route path="*" component={ NotFound } />
    </Switch>
    <Footer />
    </React.Fragment>
 </BrowserRouter>
 );

export default Router;

      
        
