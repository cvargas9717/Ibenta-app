import React, { Component } from 'react';
import MarketplaceCard from './MarketplaceCard.jsx';

class Marketplace extends Component {
  render() {
    return (
      <div className="App-header">
        <div className="row justify-content-center">
          <div className="col-xs-3"><MarketplaceCard /></div>
          <div className="col-xs-3"><MarketplaceCard /></div>
          <div className="col-xs-3"><MarketplaceCard /></div>
          <div className="col-xs-3"><MarketplaceCard /></div>
        </div>
      </div>
    );
  }
}

export default Marketplace;