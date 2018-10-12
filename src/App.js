import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
      modal: false,
      modal2: false,
      loginLabel: 'Log into account',
      signUpLabel: 'Sign Up'
    };

    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.toggleSignUpModal = this.toggleSignUpModal.bind(this);
    this.openNav = this.openNav.bind(this);
  }

  toggleLoginModal() {
    this.setState({
      modal: !this.state.modal
    });

    const url = "http://ctp-zip-api.herokuapp.com/zip/10473";

    fetch(url)
      .then((result) => {
        if(result.ok){
          return result.json();
        } else{
          return [];
        }
      })
      .then((jsonResult) => {
          console.log(jsonResult);
      })

  }

  toggleSignUpModal() {
    this.setState({
      modal2: !this.state.modal2
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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Ibenta</NavbarBrand>
          <NavbarToggler onClick={this.openNav} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button outline color="primary" onClick={this.toggleLoginModal}>{this.state.loginLabel}</Button>
               <div class="divider"/>
                <Button color="success" onClick={this.toggleSignUpModal}>{this.state.signUpLabel}</Button>
                      
              </NavItem>
              
       
            </Nav>
          </Collapse>
        </Navbar>
      </div>
        

        <header className="App-header">
          
          <Modal isOpen={this.state.modal} toggle={this.toggleLoginModal} className={this.props.className}>
              
              <ModalHeader toggle={this.toggleLoginModal}>Login</ModalHeader>
              
              <ModalBody>
                  <Form>
                      <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                          <Input type="email" name="email" id="exampleEmail"  />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>
                          <Input type="password" name="password" id="examplePassword"  />
                        </Col>
                      </FormGroup>
                      <FormGroup>
                        <Col sm={10}>
                          <Button color="success" onClick={this.toggle}>Log in</Button>
                        </Col>
                      </FormGroup>  
                  </Form>
              </ModalBody>
            </Modal>
         
        </header>


        <header className="App-header">
          
          <Modal isOpen={this.state.modal2} toggle={this.toggleSignUpModal} className={this.props.className}>
              
              <ModalHeader toggle={this.toggleSignUpModal}>Sign Up for Free!</ModalHeader>
              
              <ModalBody>
                  <Form>
                      <FormGroup row>
                        <Label for="" sm={3}>Username</Label>
                        <Col sm={10}>
                          <Input type="text" name="text" id="examplePassword"  />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="" sm={3}>First Name</Label>
                        <Col sm={10}>
                          <Input type="email" name="email" id="exampleEmail"  />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="" sm={3}>Last Name</Label>
                        <Col sm={10}>
                          <Input type="text" name="text" id="examplePassword"  />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="" sm={3}>Zip Code</Label>
                        <Col sm={10}>
                          <Input type="text" name="text" id="examplePassword"  />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="" sm={3}>Email</Label>
                        <Col sm={10}>
                          <Input type="email" name="text" id="examplePassword"  />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="" sm={4}>Confirm Email</Label>
                        <Col sm={10}>
                          <Input type="email" name="text" id="examplePassword"  />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="" sm={4}>Create Password</Label>
                        <Col sm={10}>
                          <Input type="email" name="text" id="examplePassword"  />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="" sm={4}>Confirm Password</Label>
                        <Col sm={10}>
                          <Input type="email" name="text" id="examplePassword"  />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="" sm={5}>Upload Profile Picture</Label>
                        <Col sm={10}>
                          <Input type="file" name="text" id="examplePassword"  />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="" sm={6}>Upload Government Issued ID </Label>
                        <Col sm={10}>
                          <Input type="file" name="text" id="examplePassword"  />
                        </Col>
                      </FormGroup>
                      <FormGroup>
                        <Col sm={10}>
                          <Button color="success" onClick={this.toggle}>Create Account</Button>
                        </Col>
                      </FormGroup>  
                  </Form>
              </ModalBody>
            </Modal>
         
        </header>
























      </div>


      // <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              
      //         <ModalHeader toggle={this.toggle}>Login</ModalHeader>
              
      //         <ModalBody>
      //             <Form>
      //                 <FormGroup row>
      //                   <Label for="exampleEmail" sm={2}>Email</Label>
      //                   <Col sm={10}>
      //                     <Input type="email" name="email" id="exampleEmail"  />
      //                   </Col>
      //                 </FormGroup>
      //                 <FormGroup row>
      //                   <Label for="examplePassword" sm={2}>Password</Label>
      //                   <Col sm={10}>
      //                     <Input type="password" name="password" id="examplePassword"  />
      //                   </Col>
      //                 </FormGroup>

      //                 <FormGroup>
      //                   <Col sm={10}>
      //                     <Button color="success" onClick={this.toggle}>Log in</Button>
      //                   </Col>
      //                 </FormGroup>
      //             </Form>
      //         </ModalBody>
      //       </Modal>

     



     
       
   






    );
  }
}

export default App;
