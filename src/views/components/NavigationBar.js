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
      signUpLabel: 'Sign Up',
      searchLabel: 'Search',
      uploadLabel: 'Post',
      category: 'All Categories'
    };

    this.openNav = this.openNav.bind(this);
    this.openSearch = this.openSearch.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
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
    event.preventDefault();
  }

  categoryChange = (event) => {
    this.setState({
      category: event.target.value
    });
  }

  render() {
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
  }

}

export default NavigationBar;
