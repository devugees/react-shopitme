import React, { Component } from 'react';
import './map.css'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {Paper} from '@material-ui/core';
import positionMarker from '../../pictures/map-marker-radius.svg'
import whereToGoMarker from '../../pictures/basket.svg'
require('dotenv').config();

const key = process.env.REACT_APP_MY_KEY
const url = `https://maps.googleapis.com/maps/api/js?key=${key}`

export default class Map extends Component {
  constructor(props){
    super(props)
    this.state = {
    coords: {
      latitude: null,
      longitude: null
    },
    error: null
    }
  }
  componentDidMount() {
    const geoPos = JSON.parse(localStorage.getItem('geoPos'))
    if(geoPos && geoPos.latitude !== null){
      this.setState({
        coords: {
        latitude: geoPos.latitude,
        longitude: geoPos.longitude,
        }
      })
    } else {
      this.geoId = navigator.geolocation.watchPosition(
        position => {
          this.setState({
            coords: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          });
        },
        error => {
          this.setState({ error });
        }
      );
    }
  }

  componentDidUpdate(){localStorage.setItem('geoPos', JSON.stringify(this.state.coords))}

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.geoId);
  }

  render() {
    //label=
    let lat = this.state.coords.latitude;
    let lng = this.state.coords.longitude;
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{
      lat:(this.props.deliveryList ? lat : this.props.markers[0].lat),
      lng:(this.props.deliveryList ? lng : this.props.markers[0].lng)
    }}>
    <Marker position={{ lat: lat, lng: lng }}/>
    {this.props.markers.map((marker, index)=> {
      return(
        <Marker icon={marker.highlight ? whereToGoMarker : positionMarker}  key={index} position={{ lat: marker.lat, lng: marker.lng}}/>
      )
    })}

  </GoogleMap>
));
  return (
      <Paper className="map" elevation={4}>
       <MapWithAMarker
        googleMapURL={url}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
    />
    </Paper>
    )
  }
}
