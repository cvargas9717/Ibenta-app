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
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });

    // fetch('http://localhost:8080/userInfo')
    // .then((result) => {
    //   if(result.ok) {
    //     return result.json();
    //   } else {
    //     return [];
    //   }
    // })
    // .then((jsonResult) =>{
    //   console.log(jsonResult);
    // })
  }

  render() {
    return (
      <div>
        <LoginModal
          isOpen={this.state.modal}
          toggle={this.toggle}
        />
        <Button color="primary" onClick={this.toggle}>
          {this.props.label}
        </Button>
      </div>
    );
  }
}

export default Login;
