import React, { Component } from 'react';
import Marketplace from './Marketplace.jsx';
import NavigationBar from './NavigationBar.jsx';

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