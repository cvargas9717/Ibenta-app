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

class App extends Component {

  constructor(props) {  
    super(props);
    this.state = {
      isOpen: false,
      loginModal: false,
      signUpModal: false,
      loginLabel: 'Log into account',
      signUpLabel: 'Sign Up'
    };

    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.toggleSignUpModal = this.toggleSignUpModal.bind(this);
    this.openNav = this.openNav.bind(this);
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
                <NavItem>
                  <Button outline color="primary" onClick={this.toggleLoginModal}>{this.state.loginLabel}</Button>
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
