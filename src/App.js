import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './views/components/HomePage.js';
import ProfilePage from './views/components/ProfilePage.js';
import ListingInfoPage from './views/components/ListingInfoPage.js';
import NavigationBar from './views/components/NavigationBar.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Route from 'react-router-dom/Route'
import SignUpAlert from './views/components/SignUpAlert.js';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }





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




           {/* <Route path ="/profile/:id" exact strict render = {
            ({match}) => {
              return (
              <ProfilePage
                  id = {match.params.id}
                  //name = {match.params.id}
              /> );
              }
            }
          />  */}
          </div>
        </Router>
      </div>
    );
  }
}
      
      
       /* <Router>
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
      </Router> */



export default App;
