import React, { Component } from 'react';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Post from './Post.jsx';
import SearchField from './SearchField.jsx';
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
    };

    this.openNav = this.openNav.bind(this);
    this.openSearch = this.openSearch.bind(this);
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

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Ibenta</NavbarBrand>
          <NavbarToggler onClick={this.openNav} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto text-center" navbar>
              <NavItem className='search-field'>
                <SearchField />
              </NavItem>
              <div className="divider" />
              <NavItem className='upload-button'>
                <Post label={this.state.uploadLabel} />
              </NavItem>
              <div className="divider" />
              <NavItem className='login-button'>
                <Login label={this.state.loginLabel} />
              </NavItem>
              <div className="divider" />
              <NavItem className='signup-button'>
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