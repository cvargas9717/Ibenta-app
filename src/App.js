import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './views/components/HomePage.js';
import ProfilePage from './views/components/ProfilePage.js';
import ListingInfoPage from './views/components/ListingInfoPage.js';
import SearchPage from './views/components/SearchPage.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'




class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <Route path ="/" exact render = {
            () => {
              return (<HomePage />);
            }
          }/>

          <Route path ="/listing" render = {
            () => {
              return (<ListingInfoPage />);
            }
          }/>

          <Route path ="/profile" exact render = {
            () => {
              return (
              <ProfilePage
                  //id = {}
                  name = {"Charlie"}

              />);
            }
          }/>

        <Route path ="/search:category?:keywords?/" component={SearchPage}/>



        </div>
      </Router>
    );
  }
}

export default App;
