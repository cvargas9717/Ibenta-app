import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { storage } from '../../firebase';
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
      ProfilePic: null,
      ProfilePicURL: '',
      GovernmentPic: null,
      GovernmentPicURL: '',
      render: false,
      status: "/success"
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
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

  handleProfilePicChange = (event) => {
    if (event.target.files[0]) {
      const image = event.target.files[0];
      console.log(image);
      this.setState({
        ProfilePic: image
      });
      const uploadTask = storage.ref(`profileImages/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progress function
      },
      (error) => {
        // error function
        console.log(error);
      },
      () => {
        // complete function   
        storage.ref('profileImages').child(image.name).getDownloadURL().then(url => {
          console.log(url);
          this.setState({
            ProfilePicURL: url
          });
        })
      });
    }
  }

  handleGovernmentPicChange = (event) => {
    if (event.target.files[0]) {
      const image = event.target.files[0];
      console.log(image);
      this.setState({
        GovernmentPic: image
      });
      const uploadTask = storage.ref(`governmentImages/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progress function
      },
      (error) => {
        // error function
        console.log(error);
      },
      () => {
        // complete function   
        storage.ref('governmentImages').child(image.name).getDownloadURL().then(url => {
          console.log(url);
          this.setState({
            GovernmentPicURL: url
          });
        })
      });
    }
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
          ProfilePicURL: this.state.ProfilePicURL,
          GovernmentPicURL: this.state.GovernmentPicURL
      };
      console.log(userData);


      fetch('http://localhost:8080/createUser', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(userData)
      }).then((res) => {


        if(res.ok) {
          res.json().then(data => ({
            data: data,
            status: res.status
          })).then(res => {
              console.log(res.status, res.data.FirstName)
                window.location.replace("/success");
                //window.location.replace("/profile/?id="+res.data.id)
                //window.location.replace("/profile/"+res.data.id);
                window.localStorage.setItem('userName', res.data.UserName);
                window.localStorage.setItem('userProfilePicURL', res.data.ProfilePicURL);
                window.localStorage.setItem('userId', res.data.id);
                window.localStorage.setItem('isLoggedIn', true)
          });
        }
        else{
          window.location.replace("/error");
          console.log('error');
        }

      });

      this.closeModal();

    }

  render() {
    return (

      <div>

      <SignUpModal
        isOpen={this.state.modal}
        handleSubmit = {this.handleSubmit}
        closeModal = {this.closeModal}
        toggle={this.toggle}
        handleGovernmentPicChange={this.handleGovernmentPicChange}
        handleProfilePicChange={this.handleProfilePicChange}
        userCreationStatus={this.state.status}
      />
      <Button color="success" onClick={this.toggle} id="navitem">
        {this.props.label}
      </Button>

      </div>




    );
  }
}

export default Signup;
