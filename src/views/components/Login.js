import React, { Component } from 'react';
import { Button } from 'reactstrap';
import LoginModal from './modals/LoginModal.js';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });

  }


  handleSubmit(event) {
      event.preventDefault();

      const loginData = {
          EmailAddress: event.target.EmailAddress.value,
          UniquePassword:event.target.UniquePassword.value
      };
      console.log(loginData);

      fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(loginData)
      }).then((res) => {

        console.log(res)
        if(res.ok) {

          res.json().then(data => ({
            data: data,
            status: res.status
          })).then(res => {
              console.log(res.status, res.data.FirstName)
                //window.location.replace("/profile/?id="+res.data.id)
                window.location.replace("/profile/"+res.data.id)
          });

        }
        else{
          window.location.replace("/error");
        }

      });


      //this.closeModal();

  }

  render() {
    return (
      <div>
        <LoginModal
          isOpen={this.state.modal}
          toggle={this.toggle}
          closeModal = {this.closeModal}
          handleSubmit = {this.handleSubmit}
        />
      <Button color="primary" onClick={this.toggle} id="navitem">
          {this.props.label}
        </Button>
      </div>
    );
  }
}

export default Login;
