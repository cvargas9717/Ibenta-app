import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import HomePage from './HomePage.js';

class SignUpAlert extends Component {

	constructor(props) {
		super(props);

    this.state = {
     visible: this.props.render,
		 alertMessage : this.props.alertMessage
   };

   this.onDismiss = this.onDismiss.bind(this);
	 this.timer = this.timer.bind(this);

	 this.timer()
	}

  onDismiss() {
   this.setState({ visible: false });
	 window.location.replace("/");
 }


 timer(){
	 setTimeout(this.onDismiss, 2000);
}



	render() {

		return(
      <div>
            <Alert color={this.props.alertColor}  isOpen={this.state.visible}  fade={true}>
							{this.state.alertMessage}
            </Alert>
      </div>
			);

	}
}

export default SignUpAlert;
