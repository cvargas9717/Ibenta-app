import React, { Component } from 'react';
import MarketplaceCard from './MarketplaceCard.js';
import SignUpAlert from './SignUpAlert.js';

class Marketplace extends Component {

  constructor(props){
    super(props);
    this.state = {
      render : false
    };
  }


  render() {


    if(this.props.alert === true && this.props.color === "green") {
      return (
        <div className="App-header">
        <SignUpAlert alertMessage={"Successfully created Account!"} alertColor = {"success"}/>
          <div className="row justify-content-center">
            <div className="col-xs-3"><MarketplaceCard width={"18rem"} height={"25rem"} buttonName={"I want it!"}/></div>
            <div className="col-xs-3"><MarketplaceCard width={"18rem"} height={"25rem"} buttonName={"I want it!"}/></div>
            <div className="col-xs-3"><MarketplaceCard width={"18rem"} height={"25rem"} buttonName={"I want it!"}/></div>
            <div className="col-xs-3"><MarketplaceCard width={"18rem"} height={"25rem"} buttonName={"I want it!"}/></div>
          </div>
        </div>
      );
    }else if(this.props.alert === true && this.props.color === "red"){

    return (
      <div className="App-header">
      <SignUpAlert alertMessage={"Email/Username is already in use!"} alertColor = {"danger"}/>
        <div className="row justify-content-center">
          <div className="col-xs-3"><MarketplaceCard width={"18rem"} height={"25rem"} buttonName={"I want it!"}/></div>
          <div className="col-xs-3"><MarketplaceCard width={"18rem"} height={"25rem"} buttonName={"I want it!"}/></div>
          <div className="col-xs-3"><MarketplaceCard width={"18rem"} height={"25rem"} buttonName={"I want it!"}/></div>
          <div className="col-xs-3"><MarketplaceCard width={"18rem"} height={"25rem"} buttonName={"I want it!"}/></div>
        </div>
      </div>
    );
  }else{

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
}

export default Marketplace;
