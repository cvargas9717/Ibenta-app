import React from 'react';
import {Col, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class LoginModal extends React.Component {
  render() {
    return (
      <div>
        {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
            <ModalHeader toggle={this.props.toggle}>Login</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.props.handleSubmit} >
                    <FormGroup row>
                      <Label for="exampleEmail" sm={2}>Email</Label>
                      <Col sm={10}>
                        <Input type="email" name="EmailAddress" id="exampleEmail"  />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="examplePassword" sm={2}>Password</Label>
                      <Col sm={10}>
                        <Input type="password" name="UniquePassword" id="examplePassword"  />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col sm={10}>
                        <Button color="success" >Log in</Button>
                      </Col>
                    </FormGroup>
                </Form>
            </ModalBody>
          </Modal>
      </div>
    );
  }
}

export default LoginModal;
