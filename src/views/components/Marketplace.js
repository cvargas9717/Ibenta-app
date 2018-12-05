import React, { Component } from 'react';
import MarketplaceCard from './MarketplaceCard.js';
import SignUpAlert from './SignUpAlert.js';

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


    if(this.props.alert === true && this.props.color === "green") {
      return (
        <div className="App-header">
        <SignUpAlert alertMessage={"Successfully created Account!"} alertColor = {"success"}/>
          <div className="row justify-content-center">
            {this.state.listingInfos}
          </div>
        </div>
      );
    }else if(this.props.alert === true && this.props.color === "red"){

    return (
      <div className="App-header">
      <SignUpAlert alertMessage={"Email/Username is already in use!"} alertColor = {"danger"}/>
        <div className="row justify-content-center">
          {this.state.listingInfos}
        </div>
      </div>
    );
  }else{

    return (
      <div className="App-header">
        <div className="row justify-content-center">
          {this.state.listingInfos}
        </div>
      </div>
    );



  }




  }
}

export default Marketplace;
