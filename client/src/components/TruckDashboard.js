import React, { Component } from 'react';

import Strawberry from '../images/strawberry.png';
import Chocolate from '../images/chocolate.png';
import Vanilla from '../images/vanilla.png';
import Mint from '../images/mint.png';

class TruckDashboard extends Component {

  renderTrucks() {
    let trucks = [];
    if(this.props.trucks.length) {
      trucks = this.props.trucks.map(truck => {
        const { strawberry, chocolate, vanilla, mintChip, truckNumber } = truck;
        return (
          <div className="card">
            <div className="card-header bg-primary text-white">Truck #{truckNumber}</div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <img src={Strawberry} id="strawberry" />
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: `${strawberry}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{strawberry}%</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <img src={Chocolate} />
                  <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: `${chocolate}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{chocolate}%</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <img src={Vanilla} />
                  <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: `${vanilla}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{vanilla}%</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <img src={Mint} />
                  <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: `${mintChip}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{mintChip}%</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )
      })
    }
    return trucks;
  }

  render() {
    return (
      <div className="dashboard">
        {this.renderTrucks()}
      </div>
    )
  }
}

export default TruckDashboard;
