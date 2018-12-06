import React, { Component } from 'react';
import {Col, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";

class SignUpModal extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}>Sign Up for Free!</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.props.handleSubmit}>

            <FormGroup row>
              <Label for="" sm={3}>Username</Label>
              <Col sm={10}>
                <Input type="text" name="UserName"  required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={3}>First Name</Label>
              <Col sm={10}>
                <Input type="text" name="FirstName" required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={3}>Last Name</Label>
              <Col sm={10}>
                <Input type="text" name="LastName" required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={3}>Zip Code</Label>
              <Col sm={10}>
                <Input type="text" name="Zip" required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={3}>Email</Label>
              <Col sm={10}>
                <Input type="email" name="EmailAddress" required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={4}>Confirm Email</Label>
              <Col sm={10}>
                <Input type="email" name="ConfirmEmail" required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={4}>Create Password</Label>
              <Col sm={10}>
                <Input type="password" name="UniquePassword"   required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={5}>Upload Profile Picture</Label>
              <Col sm={10}>
                <Input type="file" name="ProfilePic" onChange={this.props.handleProfilePicChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={6}>Upload Government Issued ID </Label>
              <Col sm={10}>
                <Input type="file" name="GovernmentPic" onChange={this.props.handleGovernmentPicChange} />
              </Col>
            </FormGroup>
            <Col sm={10}>
               <Button color="success" >Create Account</Button>
            </Col>
          </Form>
        </ModalBody>
      </Modal>


    );
  }
}

export default SignUpModal;
