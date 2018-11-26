import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PostModal from './modals/PostModal.js';

class Post extends Component {
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
        <PostModal
          isOpen={this.state.modal}
          toggle={this.toggle}
        />
      <Button color="danger" onClick={this.toggle} id="navitem">
          {this.props.label}
        </Button>
      </div>
    );
  }
}

export default Post;
