import React, { Component } from 'react';
import Marketplace from './Marketplace.js';
import NavigationBar from './NavigationBar.js';
import SignUpAlert from './SignUpAlert.js';

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      marketplace: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/listingInfo')
      .then((result) => {
        if(result.ok) {
          return result.json();
        } else {
          return [];
        }
      })
      .then((jsonResult) =>{
        const listingInfos = <Marketplace id="marketplace" listingInfos={jsonResult} color={this.props.color}  alert={this.props.renderAlert} />;
        this.setState({
          marketplace: listingInfos,
        });
      })
  }

  render() {


    return (

      <div>
        {/* <NavigationBar /> */}
        {this.state.marketplace}
      </div>
    );


  }
}

export default HomePage;
