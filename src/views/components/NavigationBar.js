import React, { Component } from 'react';
import Login from './Login.js';
import Signup from './Signup.js';
import Post from './Post.js';
import SearchField from './SearchField.js';
import Category from './Category.js'
import { Collapse, Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Col, Form, FormGroup, Label, Input, FormText, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isSearchOpen: false,
      loginLabel: 'Log-in',
      logoutLabel: 'Log Out',
      signUpLabel: 'Sign Up',
      searchLabel: 'Search',
      uploadLabel: 'Post',
      category: 'All Categories'
    };

    this.openNav = this.openNav.bind(this);
    this.openSearch = this.openSearch.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    window.localStorage.removeItem('isLoggedIn');
    window.localStorage.removeItem('userName');
    window.localStorage.removeItem('userId');
    window.localStorage.removeItem('userProfilePicURL');
    window.location.replace('/');
  }

  openNav() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  openSearch() {
  	this.setState({
  		isSearchOpen: !this.state.isSearchOpen
  	});
  }

  searchSubmit = (event) => {
    console.log('searching for: ', event.target.search.value + this.state.category);
    fetch('http://localhost:8080/listingInfo')
    .then((result) => {
      if(result.ok) {
        return result.json();
      } else {
        return [];
      }
    })
    .then((jsonResult) =>{
      //return jsonResult[5];
      console.log(jsonResult)
    })
    // .then((item) => {
    //   //console.log(item.Title);
    // })


    event.preventDefault();
  }

  categoryChange = (event) => {
    this.setState({
      category: event.target.value
    });
  }

  render() {
    const isLoggedIn = window.localStorage.getItem('isLoggedIn');
    const profilePicURL = window.localStorage.getItem('userProfilePicURL');
    const userId = window.localStorage.getItem('userId');
    console.log(userId);
    console.log(profilePicURL);
    console.log('user is logged in: ' + isLoggedIn);
    if (!isLoggedIn) {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Ibenta</NavbarBrand>
            <NavbarToggler onClick={this.openNav} className="nav-toggler"/>
            <Category onChange={this.categoryChange} />
            <SearchField searchSubmit={this.searchSubmit} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto text-center" id="navbar" navbar>
                <div className="divider" />
                <NavItem >
                  <Post label={this.state.uploadLabel} />
                </NavItem>
                <div className="divider" />
                <NavItem >
                  <Login label={this.state.loginLabel} />
                </NavItem>
                <div className="divider" />
                <NavItem >
                  <Signup label={this.state.signUpLabel} />
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Ibenta</NavbarBrand>
          <NavbarToggler onClick={this.openNav} className="nav-toggler"/>
          <Category onChange={this.categoryChange} />
          <SearchField searchSubmit={this.searchSubmit} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto text-center" id="navbar" navbar>
              <div className="divider" />
              <NavItem >
                <Post label={this.state.uploadLabel} />
              </NavItem>
              <div className="divider" />
              <NavItem >
                <Button color="info" onClick={this.logout} id="navitem">
                  {this.state.logoutLabel}
                </Button>
              </NavItem>
              <div className="divider" />
              <NavItem id="navitem">
                <a href={`/profile/${userId}`}>
                  <img 
                    src={profilePicURL} 
                    className="super-small-profile-pic rounded-circle"  
                  />
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      );
    }
  }

}

export default NavigationBar;
