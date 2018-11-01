import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MarketplaceCard from './components/MarketplaceCard.jsx';
import LoginModal from './components/modals/LoginModal.jsx';
import SignUpModal from './components/modals/SignupModal.jsx';
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

class SearchField extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchInput: '',
			searchLabel: 'Search'
		}
	}

  	searchBar = (event) => {
  		const search = event.target.value;
  		this.setState({searchInput: search});
  	}

  	searchSubmit(event) {
  		console.log('searching for: ', event.target.search);
  	}

	render() {
		return(
			<div>
        <Form onSubmit= {this.searchSubmit}>
					<Input
						type= 'text'
						name= 'search'
						placeholder= 'Search for items...'
						onChange= {this.searchBar}
					/>
        </Form>
			</div>
			);
	}
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      loginModal: false,
      signUpModal: false,
      loginLabel: 'Log-in',
      signUpLabel: 'Sign Up',
      isSearchOpen: false,
      searchLabel: 'Search',
      postModal: false,
      uploadLabel: 'Post'
    };

    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.toggleSignUpModal = this.toggleSignUpModal.bind(this);
    this.openNav = this.openNav.bind(this);
    this.openSearch = this.openSearch.bind(this);
    this.toggleUploadModal = this.toggleUploadModal.bind(this);
  }

  toggleLoginModal() {
    this.setState({
      loginModal: !this.state.loginModal
    });
  }

  toggleSignUpModal() {
    this.setState({
      signUpModal: !this.state.signUpModal
    });
  }

  openNav(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  openSearch(){
  	this.setState({
  		isSearchOpen: !this.state.isSearchOpen
  	});
  }

  toggleUploadModal() {
  	this.setState({
      postModal: !this.state.postModal
    });
  }




  render() {
    return (
      <div className="App">

        <LoginModal
          isOpen={this.state.loginModal}
          toggle={this.toggleLoginModal}
        />
        <SignUpModal
          isOpen={this.state.signUpModal}
          toggle={this.toggleSignUpModal}
        />

        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Ibenta</NavbarBrand>
            <NavbarToggler onClick={this.openNav} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem style={{textAlign: 'left'}}>
              		<SearchField />
                </NavItem>
                <div className="divider"/>
                <NavItem style={{textAlign: 'left'}}>
                  <Button color="danger" onClick={this.toggleUploadModal}>{this.state.uploadLabel}</Button>
                </NavItem>
                <NavItem style={{textAlign: 'left'}}>
                  <div className="divider"/>
                  <Button outline color="primary" onClick={this.toggleLoginModal}>{this.state.loginLabel}</Button>
                </NavItem>
                <NavItem style={{textAlign: 'left'}}>
                  <div className="divider"/>
                  <Button color="success" onClick={this.toggleSignUpModal}>{this.state.signUpLabel}</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

        <div className="App-header">
          <div className="row justify-content-center">
            <div className="col-xs-3"><MarketplaceCard /></div>
            <div className="col-xs-3"><MarketplaceCard /></div>
            <div className="col-xs-3"><MarketplaceCard /></div>
            <div className="col-xs-3"><MarketplaceCard /></div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
