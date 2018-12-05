import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js';
import {Jumbotron, Container, Row, Col} from 'reactstrap';
import MarketplaceCard from './MarketplaceCard.js';


class ProfilePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      AccountName : " "
    }

    this.findUserByID = this.findUserByID.bind(this);
    this.findUserByID();
  }

  findUserByID(){

    const userID = {
      id : this.props.id
    };

    console.log(userID);

    fetch('http://localhost:8080/a', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(userID)
    }).then((res) => {

      console.log(res);

      if(res.ok) {

        res.json().then(data => ({
          data: data
        })).then(res => {

          this.setState({AccountName: res.data.UserName});


        });

      }

    });

  }


render() {

  console.log(this.props)
  return (
    <div>
      <NavigationBar />
      <h3></h3>

      <div className="App-header">
        <Container>
          <Row>
            <Col>
              <Jumbotron>
                <h1>Welcome back {this.state.AccountName + "!"}</h1>
                <h5># of Postings: {6}</h5>

                <div className="row justify-content-center">
                  <div className="col-xs-3"><MarketplaceCard width={"13rem"} height={"24rem"} buttonName={"Edit"}/></div>
                  <div className="col-xs-3"><MarketplaceCard width={"13rem"} height={"24rem"} buttonName={"Edit"}/></div>
                  <div className="col-xs-3"><MarketplaceCard width={"13rem"} height={"24rem"} buttonName={"Edit"}/></div>
                  <div className="col-xs-3"><MarketplaceCard width={"13rem"} height={"24rem"} buttonName={"Edit"}/></div>
                  <div className="col-xs-3"><MarketplaceCard width={"13rem"} height={"24rem"} buttonName={"Edit"}/></div>
                  <div className="col-xs-3"><MarketplaceCard width={"13rem"} height={"24rem"} buttonName={"Edit"}/></div>
                </div>
              </Jumbotron>
            </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <h1>Settings:</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
              </p>

            </Jumbotron>
          </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1>Welcome back {this.props.name}</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
            </p>
          </Jumbotron>
        </Col>
    </Row>
  </Container>










      </div>
    </div>
  );

}


}
export default ProfilePage;
