import React, { Component } from 'react';
import { Button } from 'reactstrap';
import SignupModal from './modals/SignupModal.jsx';

class Signup extends Component {
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
  }

  render() {
    return (
      <div>
        <SignupModal
          isOpen={this.state.modal}
          toggle={this.toggle}
        />
        <Button color="success" onClick={this.toggle}>
          {this.props.label}
        </Button>
      </div>
    );
  }
}

export default Signup;