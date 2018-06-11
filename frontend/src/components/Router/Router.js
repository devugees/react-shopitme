import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../landing/Landing'
import UserDetailsMiddleware from '../middlewares/UserDetailsMiddleware';
import CreateShoppingListMiddleware from '../middlewares/CreateShoppingListMiddleware';
import AcceptedDelivery from '../master-components/AcceptedDelivery';
import OrderDeliveryHistory from '../master-components/OrderDeliveryHistory';
import MainDeliveryPage from '../master-components/MainDeliveryPage';
import NewPassword from '../master-components/NewPassword'
import Navbar from '../nav-bar/Navbar';
import Footer from '../Footer'
import NotFound from '../not-found/notFound';
// get main for testing
import Main from  '../Main';
import {Store} from '../../fakeStore';
import PrivateRoute from '../privateRoute';
import { authCrudAPI } from '../../helpers/helpers'



export default class Router extends Component {
  constructor(props) {
    super();
      this.state = {
        isAuthenticated: false,
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
    authCrudAPI('post','/user/checkingToken')
    .then( data => {
      if ( data === 'Unauthorized') {
        localStorage.removeItem('userInfo')
        localStorage.removeItem('token')
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
            <PrivateRoute exact path='/main' component={Main} authed={this.state.isAuthenticated} />
            <Route exact path='/userdetails' component={UserDetailsMiddleware}  />
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
