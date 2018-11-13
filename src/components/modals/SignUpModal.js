import React from 'react';
import {Col, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SignUpModal extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}>Sign Up for Free!</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="" sm={3}>Username</Label>
              <Col sm={10}>
                <Input type="text" name="text" id="examplePassword"  required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={3}>First Name</Label>
              <Col sm={10}>
                <Input type="email" name="email" id="exampleEmail"  required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={3}>Last Name</Label>
              <Col sm={10}>
                <Input type="text" name="text" id="examplePassword"  required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={3}>Zip Code</Label>
              <Col sm={10}>
                <Input type="text" name="text" id="examplePassword"  required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={3}>Email</Label>
              <Col sm={10}>
                <Input type="email" name="text" id="examplePassword"  required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={4}>Confirm Email</Label>
              <Col sm={10}>
                <Input type="email" name="text" id="examplePassword"  required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={4}>Create Password</Label>
              <Col sm={10}>
                <Input type="email" name="text" id="examplePassword"  required/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={4}>Confirm Password</Label>
              <Col sm={10}>
                <Input type="email" name="text" id="examplePassword"  required/>
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
                <Button color="success" onClick={this.props.toggle}>Create Account</Button>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}

export default SignUpModal;
