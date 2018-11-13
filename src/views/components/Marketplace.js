import React, { Component } from 'react';
import MarketplaceCard from './MarketplaceCard.js';

class Marketplace extends Component {
  render() {
    return (
      <div className="App-header">
        <div className="row justify-content-center">
          <div className="col-xs-3"><MarketplaceCard width={"18rem"} height={"25rem"} buttonName={"I want it!"}/></div>
          <div className="col-xs-3"><MarketplaceCard width={"18rem"} height={"25rem"} buttonName={"I want it!"}/></div>
          <div className="col-xs-3"><MarketplaceCard width={"18rem"} height={"25rem"} buttonName={"I want it!"}/></div>
          <div className="col-xs-3"><MarketplaceCard width={"18rem"} height={"25rem"} buttonName={"I want it!"}/></div>
        </div>
      </div>
    );
  }
}

export default Marketplace;
