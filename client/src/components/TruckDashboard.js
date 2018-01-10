import React, { Component } from 'react';

class TruckDashboard extends Component {

  renderTrucks() {
    if(this.props.trucks.length) {
      return <h1>{this.props.trucks[0].strawberry}</h1>
    }
  }

  render() {
    return (
      <div>
        {this.renderTrucks()}
      </div>
    )
  }
}

export default TruckDashboard
