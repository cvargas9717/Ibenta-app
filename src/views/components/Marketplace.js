import React, { Component } from 'react';
import MarketplaceCard from './MarketplaceCard.js';

class Marketplace extends Component {

  constructor(props) {
    super(props);

    this.state = {
      listingInfos: [],
    }
  }

  componentDidMount() {
    const listingInfos = this.props.listingInfos.map((item) => {
      return (
        <MarketplaceCard 
          data={item} 
          className="col-xs-3"
          width={"18rem"}
          height={"25rem"}
          buttonName={"I want it!"}
        />
      );
    })

    this.setState({
      listingInfos: listingInfos,
    })
  }

  render() {
    return (
      <div className="App-header">
        <div className="row justify-content-center">
          {this.state.listingInfos}
          {/* <div className="col-xs-3"><MarketplaceCard width={"18rem"} height={"25rem"} buttonName={"I want it!"}/></div>
          <div className="col-xs-3"><MarketplaceCard width={"18rem"} height={"25rem"} buttonName={"I want it!"}/></div>
          <div className="col-xs-3"><MarketplaceCard width={"18rem"} height={"25rem"} buttonName={"I want it!"}/></div>
          <div className="col-xs-3"><MarketplaceCard width={"18rem"} height={"25rem"} buttonName={"I want it!"}/></div> */}
        </div>
      </div>
    );
  }
}

export default Marketplace;
