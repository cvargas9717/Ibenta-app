import React, { Component } from 'react';
import { Button } from 'reactstrap';
import SignUpModal from './modals/SignUpModal.js';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      redirect: true
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }




    renderRedirect () {
      console.log(this.state.redirect);

      if (this.state.redirect) {
        console.log(this.state.redirect);
        return <Redirect to='/google.com' />
        console.log("YOOO");
      }
      console.log("hey");
    }




  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  closeModal(){
    this.setState({
      modal: false
    });
  }

  setRedirect () {
    this.setState({
      redirect: true
    });

  }

  handleSubmit(event) {

    event.preventDefault();

      const userData = {
          UserName: event.target.UserName.value,
          FirstName: event.target.FirstName.value,
          LastName: event.target.LastName.value,
          Zip: event.target.Zip.value,
          EmailAddress: event.target.EmailAddress.value,
          ConfirmEmail: event.target.ConfirmEmail.value,
          UniquePassword:event.target.UniquePassword.value,
          ProfilePic: event.target.ProfilePic.value,
          GovernmentPic: event.target.GovernmentPic.value
      };
      console.log(userData);


      fetch('http://localhost:8080/createUser', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(userData)
      });

      this.closeModal();
      //this.setRedirect();

      this.renderRedirect()
    }

  render() {
    return (
      <div>

      <SignUpModal
        isOpen={this.state.modal}
        handleSubmit = {this.handleSubmit}
        closeModal = {this.closeModal}
        toggle={this.toggle}
      />
    <Button color="success" onClick={this.toggle} id="navitem">
        {this.props.label}
      </Button>
      </div>
    );
  }
}

export default Signup;
