import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Collapse, Navbar, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Col, Form, FormGroup, Label, Input, FormText, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

  const inputParsers = {
    date(input) {
      const [month, day, year] = input.split('/');
      return `${year}-${month}-${day}`;
    },
    uppercase(input) {
      return input.toUpperCase();
    },
    number(input) {
      return parseFloat(input);
    },
  };



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

  	searchClick(inputName) {
  		console.log('searching for: ', inputName);
  	}

	render() {
		return(
			<div className="row">
				<div className="col-md-9">
					<Input
						type= 'text'
						id= 'searchBar'
						className= 'search'
						placeholder= 'Search for items'
						onChange= {this.searchBar}
					/>
					
				</div>
				<div className="col-md-3">
					<Button onClick = {(i) => this.searchClick(this.state.searchInput)}>{this.state.searchLabel}</Button>
				</div>
			</div>
			);
	}
}

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


    this.handleSubmit = this.handleSubmit.bind(this);
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

     //const url = "http://ctp-zip-api.herokuapp.com/zip/90210";

    // fetch(url)
    //   .then((result) => {
    //     if(result.ok){
    //       return result.json();
    //     } else {
    //       return [];
    //     }
    //   })
    //   .then((jsonResult) => {
    //       console.log(jsonResult);
    //   })

    fetch('http://localhost:8080/userInfo')
    .then((result) => {
      if(result.ok) {
        return result.json();
      }else {
        return [];
      }
    })
    .then((jsonResult) =>{
      console.log(jsonResult);
    })

  }

  toggleSignUpModal(event) {
    this.setState({
      signUpModal: !this.state.signUpModal
    });
  }

  openNav() {
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

  handleSubmit(event) {
    //event.preventDefault();
      var userData = {
          UserName: event.target.UserName.value,
          FirstName: event.target.FirstName.value,
          LastName: event.target.LastName.value,
          ZIP: event.target.ZIP.value,
          EmailAddress: event.target.EmailAddress.value,
          ConfirmEmail: event.target.ConfirmEmail.value,
          UniquePassword:event.target.UniquePassword.value,
          ConfirmPassword: event.target.ConfirmPassword.value,
          ProfilePic: event.target.ProfilePic.value,
          GovernmentPic: event.target.GovernmentPic.value
      };
      console.log(userData);


      fetch('http://localhost:8080/createUser', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(userData)
      });


      // axios.post(`http://localhost:8080/createUser`,{ a })
      //   .then(res => {
      //     console.log(res);
      //     console.log(res.data);
      //   });

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

        <Modal isOpen={this.state.postModal} toggle={this.toggleUploadModal} className={this.props.className}>
          <ModalHeader toggle={this.toggleUploadModal}>Post an Item</ModalHeader>
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
                  <Button color="success" onClick={this.toggle}>Post</Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>



          <Modal isOpen={this.state.loginModal} toggle={this.toggleLoginModal} className={this.props.className}>

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

          <Modal isOpen={this.state.signUpModal} toggle={this.toggleSignUpModal} className={this.props.className}>

            <ModalHeader toggle={this.toggleSignUpModal}>Sign Up for Free!</ModalHeader>

            <ModalBody>
                <Form  onSubmit={this.handleSubmit}>
                    <FormGroup row>
                      <Label for="" sm={3}>Username</Label>
                      <Col sm={10}>
                        <Input type="text" name="UserName"   required/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="" sm={3}>First Name</Label>
                      <Col sm={10}>
                        <Input type="text" name="FirstName"   required/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="" sm={3}>Last Name</Label>
                      <Col sm={10}>
                        <Input type="text" name="LastName"   required/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="" sm={3}>Zip Code</Label>
                      <Col sm={10}>
                        <Input type="text" name="ZIP"   required/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="" sm={3}>Email</Label>
                      <Col sm={10}>
                        <Input type="email" name="EmailAddress"   required/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="" sm={4}>Confirm Email</Label>
                      <Col sm={10}>
                        <Input type="email" name="ConfirmEmail"   required/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="" sm={4}>Create Password</Label>
                      <Col sm={10}>
                        <Input type="password" name="UniquePassword"   required/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="" sm={4}>Confirm Password</Label>
                      <Col sm={10}>
                        <Input type="password" name="ConfirmPassword"   required/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="" sm={5}>Upload Profile Picture</Label>
                      <Col sm={10}>
                        <Input type="file" name="ProfilePic"  />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="" sm={6}>Upload Government Issued ID </Label>
                      <Col sm={10}>
                        <Input type="file" name="GovernmentPic"  />
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

        <header className="App-header">
          <div className="row">
            <div className="col-sm-4">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk o</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-sm-4">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bul</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </div>
            <div className="col-sm-4">
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bu</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </div>
          </div>
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













      </div>

    );
  }
}



export default App;
