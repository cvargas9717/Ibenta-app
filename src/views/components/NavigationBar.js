import React, { Component } from 'react';
import Login from './Login.js';
import Signup from './Signup.js';
import Post from './Post.js';
import SearchField from './SearchField.js';
import Category from './Category.js';
import { withRouter } from 'react-router';
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
      category: 'All Categories',
      searchfield: ''
    };

    this.openNav = this.openNav.bind(this);
    this.openSearch = this.openSearch.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
    this.updateSearchBar = this.updateSearchBar.bind(this);
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
    console.log('searching for: ', this.state.searchfield + ' ' + this.state.category);
    fetch('http://localhost:8080/listingInfo')
    .then((result) => {
      if(result.ok) {
        return result.json();
      } else {
        return [];
      }
    })
    .then((jsonResult) =>{
      let category = this.state.category;
      let keywords = this.state.searchfield;
      this.props.history.push({
        pathname: '/search',
        //search: `?category=${category}?keywords=${keywords}`,
        state: {category, keywords}
      })
      if (this.props.location.pathname === '/search') {
        window.location.reload();
      }
    })

    event.preventDefault();
  }

  categoryChange = (event) => {
    this.setState({
      category: event.target.value
    });
  }

  updateSearchBar = (event) => {
    this.setState({
      searchfield: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Ibenta</NavbarBrand>
          <NavbarToggler onClick={this.openNav} className="nav-toggler"/>
          <Category onChange={this.categoryChange} />
          <SearchField searchSubmit={this.searchSubmit} onChange={this.updateSearchBar} />
          <Button onClick={this.searchSubmit} className="desktop-category">Go</Button>
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

export default withRouter(NavigationBar);
