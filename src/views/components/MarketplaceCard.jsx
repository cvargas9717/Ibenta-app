import React, { Component } from 'react';

class MarketplaceCard extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      pictureUrl : "https://cnet2.cbsistatic.com/img/IwuqCeoFETSbn95uZhqoHKaFu8A=/2017/09/26/4c6ec5f4-8dcb-45c7-8770-e87208e3d3ae/17bose-quietcomfort-35-ii.jpg",
      itemName : "Bose qc35 lsdjflisjdlfjsdlif",
      itemPrice : 250,
      location : "New York, 10012"
    });
  }

  render() {
    return (
      <div className="card" style={{maxWidth: 18 + 'rem', height: 25 + 'rem'}}>
        <div className="header">
          <img className="card-img-top img-fluid mx-auto" 
            src={this.state.pictureUrl}
            alt="Card image cap" 
          />
        </div>
        <div className="card-body">
          <h3 className="card-title">{this.state.itemName}</h3>
          <h4 className="card-subtitle">${this.state.itemPrice}</h4>
          <h5 className="card-text text-muted">{this.state.location}</h5>
          <a href="#" className="buyButton round font-weight-bold">I want it</a>
        </div>
      </div>
    );
  }
};

export default MarketplaceCard;