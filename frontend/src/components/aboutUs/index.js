import React, { Component } from 'react';
import { crudAPI } from '../../helpers/helpers';
import './aboutUs.css';
//
import Paper from '@material-ui/core/Paper';

export default class aboutUs extends Component {

  state = {
    ourGHNames:['laithmassoud','NachoMerino','Versioncrowd','tarekcham','orwa337'],
    ourData:[]
  }

  getOurData = () => {
    this.state.ourGHNames.map(name => {return(
      crudAPI('get', `https://api.github.com/users/${name}?client_id=a12b6d5ca6b666061f3a&client_secret=4d8bbe0423b48bf1394b5b4194138302ceadc6f1`)
        .then(data => {
          this.setState(prevState => {return {ourData: [...prevState.ourData, data]}})  
        })
    )})
  }

  componentDidMount(){
    this.getOurData()
  }


  render(){
    return(
      <React.Fragment>
      <h1 className='shopname-container'>Jibli Team:</h1>
        {this.state.ourData.map(developer => (
          <Paper className='container' elevation={1}>
            <div className='name-container'>
              <h1>{developer.name}</h1>
            </div>
            <div className='image-links-container'>
              <div className='image-container'>
                <img src={developer.avatar_url} alt={developer.name}/>
              </div>
              <div className='links-container'>
                {developer.html_url ?
                  <a href={developer.html_url} target="_blank" title={`GitHub of ${developer.name}`}>
                    <i className='fab fa-github-square'></i>
                  </a>: null}
                {developer.email ?
                  <a href={`mailto:${developer.email}`} title={`Send an email to ${developer.name}`}>
                    <i className='fas fa-envelope-open'></i>
                  </a>:null}
                {developer.blog ?
                  <a href={developer.blog} target="_blank" title={`The webpage of ${developer.name}`}>
                    <i className='fas fa-address-card'></i>
                  </a>: null}
              </div>
            </div>
            <div className='bio-container'>
              <h3>{developer.bio}</h3>
            </div>
          </Paper>
        ))}
      </React.Fragment>   
    )
  }
}
