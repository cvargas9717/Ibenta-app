import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './views/components/HomePage.js';
import ProfilePage from './views/components/ProfilePage.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import SignUpAlert from './views/components/SignUpAlert.js';



class App extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }


  render() {


    return (
      <Router>
        <div className="App">

          <Route path ="/" exact render = {
            () => {
              return (<HomePage />);
            }
          }/>



            <Route path ="/success" exact render = {
              () => {
                return (<HomePage  color = {"green"} renderAlert = {true}/>);
              }
            }/>


            <Route path ="/error" exact render = {
              () => {
                return (<HomePage color = {"red"} renderAlert = {true}/>);
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

        </div>
      </Router>
    );
  }
}

export default App;
