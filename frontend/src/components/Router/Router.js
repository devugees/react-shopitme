import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../landing/Landing'
import UserDetailsMiddleware from '../middlewares/UserDetailsMiddleware';
import AcceptSingleDelivery from '../master-components/AcceptSingleDelivery';
import CreateShoppingListMiddleware from '../middlewares/CreateShoppingListMiddleware';
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
            isAuthenticated: false,
        }
    
        this.handleLoginSuccess = () => {
            this.setState({
                isAuthenticated:true
            }) 
        }
    
        this.openLogin = () => {
            console.log('openLOGIN', this.navBar)

            // check if authenticated, if not open login
           this.navBar.current.setState({
               openLogin:true,
           })
        }
        
        this.landingPageWrapper = (props) => {
            return (
              <Landing
                onClick={this.openLogin}
                {...props}
              />
            );
          }
          this.navBar = React.createRef();
      
    }
    

render() {
           
         return (
 <BrowserRouter>
    <React.Fragment>
    <Store.Consumer>
    {data =>(<Navbar handleLoginSuccess={this.handleLoginSuccess} updateUserData={data.updateUserData} ref={this.navBar}  /> )}
    </Store.Consumer>
    <Switch>
        <Route exact path='/' component={this.landingPageWrapper} />
        <PrivateRoute exact path='/main' component={Main}  authed={this.state.isAuthenticated} />
        <PrivateRoute exact path='/userdetails' component={UserDetailsMiddleware}  authed={this.state.isAuthenticated} />
        <PrivateRoute exact path='/maindeliverypage' component={MainDeliveryPage}  authed={this.state.isAuthenticated} />
        <PrivateRoute exact path='/acceptsingledelivery' component={AcceptSingleDelivery}  authed={this.state.authed} />
        <PrivateRoute exact path='/createshoppinglist' component={CreateShoppingList}  authed={this.state.isAuthenticated} />
        <PrivateRoute exact path='/accepteddelivery' component={AcceptedDelivery}  authed={this.state.isAuthenticated} />
        <PrivateRoute exact path='/orderdeliveryhistory' component={OrderDeliveryHistory}  authed={this.state.isAuthenticated} />
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

      
        
