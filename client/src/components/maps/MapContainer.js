import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {

  renderTruckMarkers() {
    let trucks = [];
    if(this.props.trucks.length) {
      trucks = this.props.trucks.map(truck => {
        return (
          <Marker
            key={truck._id}
            name={truck.truckNumber}
            title={`${truck.truckNumber}`}
            position={{ lat: truck.location.lat, lng: truck.location.lng }}
            icon={{
              url: 'http://files.softicons.com/download/food-drinks-icons/free-food-icons-by-daily-overview/png/64x64/ice-cream.png',
            }}
          />
        );
      });
    }
    return trucks;
  }

  render() {
    console.log(this.props);
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={{ width: '75%', height: '75%' }}
        initialCenter={{ lat: 42.364466, lng: -71.091272 }}
      >
        {this.renderTruckMarkers()}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  // FullStackReact.com's free API key to use
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer)
