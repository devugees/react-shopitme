import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../landing/Landing'
import UserDetailsMiddleware from '../middlewares/UserDetailsMiddleware';
import CreateShoppingListMiddleware from '../middlewares/CreateShoppingListMiddleware';
import AcceptedDelivery from '../master-components/AcceptedDelivery';
import OrderDeliveryHistory from '../master-components/OrderDeliveryHistory';
import MainDeliveryPage from '../master-components/MainDeliveryPage';
import NewPassword from '../master-components/NewPassword';
import AboutUs from '../aboutUs';
import Navbar from '../nav-bar/Navbar';
import Footer from '../footer/Footer'
import NotFound from '../not-found/notFound';
import {Store} from '../../fakeStore';
import PrivateRoute from '../privateRoute';
import { authCrudAPI } from '../../helpers/helpers'

export default class Router extends Component {
  constructor(props) {
    super();
      this.state = {
        isAuthenticated: true,
        }
      this.handleLoginSuccess = () => {
        this.setState({
          isAuthenticated:true
        })
      }
      this.openLogin = () => {                      
        if(!this.state.isAuthenticated)
            // check if authenticated, if not open login
            this.navBar.current.setState({
                openLogin:true
            })
        }
      this.logOut = ()=> {
        this.setState({
          isAuthenticated:false
        })
      }
      this.landingPageWrapper = props => {
        return (
          <Landing onClick={this.openLogin} {...props} />
        );
      }
      this.navBar = React.createRef();
    }

  componentDidMount(){
    authCrudAPI('POST','/checkingToken')
    .then( data => {
      if ( data === 'Unauthorized') {
        localStorage.removeItem('userInfo')
        localStorage.removeItem('token')
        this.setState({
          isAuthenticated:false
        })
      } else {
        this.setState({
          isAuthenticated:true
        }) 
      }
    })
    .catch(error =>  {
      console.log('error',error);
    })
  }
    
  render() {        
    return (
      <BrowserRouter>
        <React.Fragment>
          <Store.Consumer>
          {data =>(<Navbar handleLoginSuccess={this.handleLoginSuccess} updateUserData={data.updateUserData} ref={this.navBar} logOut={this.logOut}  /> )}
          </Store.Consumer>
          <Switch>
            <Route exact path='/' component={this.landingPageWrapper} />
            <Route exact path='/userdetails' component={UserDetailsMiddleware}  />
            <Route exact path='/about' component={AboutUs}  />
            <PrivateRoute exact path='/maindeliverypage' component={MainDeliveryPage} authed={this.state.isAuthenticated} />
            <PrivateRoute exact path='/accepteddelivery' component={AcceptedDelivery} authed={this.state.isAuthenticated} />
            <PrivateRoute exact path='/orderdeliveryhistory' component={OrderDeliveryHistory} authed={this.state.isAuthenticated} />
            <Route exact path='/reset/*' component={NewPassword}  />
            <PrivateRoute exact path='/createshoppinglist' component={CreateShoppingListMiddleware} authed={this.state.isAuthenticated} />
            <Route path="*" component={ NotFound } />
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    )
  }
};
