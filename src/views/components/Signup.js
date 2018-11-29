import React, { Component } from 'react';
import { Button } from 'reactstrap';
import SignUpModal from './modals/SignUpModal.js';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import SignUpAlert from './SignUpAlert.js';
import Marketplace from './Marketplace.js';
import HomePage from './HomePage.js';
import ProfilePage from './ProfilePage.js';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      redirect: true,
      render: false,
      status: "/success"
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }




    renderRedirect () {
      console.log("qqqq")

    }




  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    //console.log("qwe")
  }

  closeModal(){
    this.setState({
      modal: false,
      render : true
    })

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
      }).then((res) => {


        if(res.ok) {
          window.location.replace("/success");
        }
        else{
          window.location.replace("/error");
        }

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
            userCreationStatus={this.state.status}
          />

         <Button color="success" onClick={this.toggle}>
            {this.props.label}
          </Button>

      </div>




    );
  }
}

export default Signup;
