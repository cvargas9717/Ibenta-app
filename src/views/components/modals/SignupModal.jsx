import React, { Component } from 'react';
import {Col, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SignUpModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    //event.preventDefault();
    
      const userData = {
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

      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();

      // axios.post(`http://localhost:8080/createUser`,{ a })
      //   .then(res => {
      //     console.log(res);
      //     console.log(res.data);
      //   });

    }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>      
        <ModalHeader toggle={this.props.toggle}>Sign Up for Free!</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
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
            <Col sm={10}>
              <Button color="success" data-dismiss="modal" >Create Account</Button>
            </Col>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}

export default SignUpModal;