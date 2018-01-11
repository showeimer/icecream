import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {

  renderTruckMarkers() {
    let trucks = [];
    if(this.props.trucks.length) {
      trucks = this.props.trucks.map(truck => {
        const { _id, truckNumber, location } = truck;
        return (
          <Marker
            key={_id}
            name={truckNumber}
            title={`${truckNumber}`}
            position={{ lat: location.lat, lng: location.lng }}
            icon={{
              url: 'http://files.softicons.com/download/art-icons/circus-icons-by-joker-design/png/48x48/ice%20cream.png',
            }}
          />
        );
      });
    }
    return trucks;
  }

  renderRunnerMarkers() {
    let runners = [];
    if(this.props.runners.length) {
      runners = this.props.runners.map(runner => {
        const { runnerNumber, location, _id } = runner;
        return (
          <Marker
            key={_id}
            name={runnerNumber}
            title={`${runnerNumber}`}
            position={{ lat: location.lat, lng: location.lng }}
            icon={{
              url: 'http://files.softicons.com/download/food-drinks-icons/free-food-icons-by-daily-overview/png/48x48/ice-cream.png',
            }}
          />
        );
      });
    }
    return runners;
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={{ width: '75%', height: '75%' }}
        initialCenter={{ lat: 42.364466, lng: -71.091272 }}
        className={'map'}
      >
        {this.renderTruckMarkers()}
        {this.renderRunnerMarkers()}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  // FullStackReact.com's free API key to use
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer)
