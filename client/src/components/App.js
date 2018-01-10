import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrucks, fetchRunners } from '../actions';

import MapContainer from './maps/MapContainer';
import TruckDashboard from './TruckDashboard';

class App extends Component {

  componentDidMount() {
    this.props.fetchTrucks();
    this.props.fetchRunners();
  }

  renderGoogleMap() {
    if(this.props.trucks.length > 0) {
      return <MapContainer trucks={this.props.trucks} runners={this.props.runners} />
    } else {
      return <h3>Loading...</h3>
    }
  }

  render() {
    return (
      <div className="container">
        {this.renderGoogleMap()}
      <TruckDashboard trucks={this.props.trucks} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log('state is',state);
  return {
    trucks: state.trucks,
    runners: state.runners
  }
}

export default connect(mapStateToProps, { fetchTrucks, fetchRunners })(App);
