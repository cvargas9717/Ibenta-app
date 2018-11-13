import React, { Component } from 'react';
import Marketplace from './Marketplace.js';
import NavigationBar from './NavigationBar.js';

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Marketplace />
      </div>
    );
  }
}

export default HomePage;
