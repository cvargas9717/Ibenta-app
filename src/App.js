import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './views/components/HomePage.js';
import ProfilePage from './views/components/ProfilePage.js';
import ListingInfoPage from './views/components/ListingInfoPage.js';
import NavigationBar from './views/components/NavigationBar.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'




class App extends Component {
  render() {

    return (
      <div>
        <NavigationBar />
        <Router>
          <div className="App">
            <Route path ="/" exact render = {
              () => {
                return (<HomePage />);
              }
            }/>

            <Route path="/listing/:listingId" component = {ListingInfoPage}
            // render = {
            //   (path) => {
            //     return (<ListingInfoPage />);
            //   }
            // }
            />

            <Route path ="/profile/:userId" component={ProfilePage}
            // render = {
            //   () => {
            //     return (
            //     <ProfilePage
            //         //id = {}
            //         name = {"Charlie"}

            //     />);
            //   }
            // }
            />



          </div>
        </Router>
      </div>
    );
  }
}

export default App;
