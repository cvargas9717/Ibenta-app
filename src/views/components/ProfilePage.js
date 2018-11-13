import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js';
import {Jumbotron, Container, Row, Col} from 'reactstrap';
import MarketplaceCard from './MarketplaceCard.js';

class ProfilePage extends Component {

  constructor(props) {
    super(props);

  }


render() {
  return (
    <div>
      <NavigationBar />
      <h3></h3>

      <div className="App-header">
        <Container>
          <Row>
            <Col>
              <Jumbotron>
                <h1>Welcome back {this.props.name}</h1>
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
