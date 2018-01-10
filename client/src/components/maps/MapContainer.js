import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{
          width: '75%',
          height: '75%'
        }}
        initialCenter={{
          lat: 42.364466,
          lng: -71.091272
        }}
      >

      </Map>
    )
  }
}

export default GoogleApiWrapper({
  // FullStackReact.com's free API key to use
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer)
