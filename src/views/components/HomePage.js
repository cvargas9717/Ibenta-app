import React, { Component } from 'react';
import Marketplace from './Marketplace.js';
import NavigationBar from './NavigationBar.js';
import SignUpAlert from './SignUpAlert.js';

class HomePage extends Component {

  constructor(props){
    super(props)

  }

  render() {


    return (

      <div>
        <NavigationBar />
        <Marketplace  color={this.props.color}  alert={this.props.renderAlert}/>
      </div>
    );


  }
}

export default HomePage;
