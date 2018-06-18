import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export default class LandingPage extends Component {


  constructor(props) {
   super()
  
     this.onClick = () => {
       this.props.onClick()
     }
  }
  
   render() {
     return (
       <div className="landing">
         <Link to={"/createshoppinglist"} onClick={this.onClick}>
             <div className="order_btn btn">
               <div className="imgd">
                 <i className="fas fa-list fa-5x"></i>
               </div>
             </div>
         </Link>
             
         <Link to={"/maindeliverypage"} onClick={this.onClick}>
             <div className="delivery_btn btn">
               <div className="imgd">
                 <i className="fas fa-shopping-basket fa-5x"></i>
               </div>
             </div>
         </Link>
       </div>
     )
   }
  };
