import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js';
import {Jumbotron, Container, Row, Col} from 'reactstrap';
import MarketplaceCard from './MarketplaceCard.js';


class ProfilePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      FirstName: '',
      LastName: '',
      Zip: '',
      EmailAddress: '',
      ProfilePicURL: '',
      numberOfListings: 0,
      listings: [],
    }

    this.findUserByID = this.findUserByID.bind(this);
    //this.findUserByID();
  }

  findUserByID(){

    const userID = {
      //id : this.props.id
      id : this.props.match.params.userId
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

  componentDidMount() {
    console.log('this is the profile page component');
    const params = this.props.match.params;
    console.log(params);
    console.log(params.userId);

    // fetch user's info
    fetch('http://localhost:8080/userInfo/' + params.userId)
      .then((result) => {
        if(result.ok) {
          return result.json();
        } else {
          return [];
        }
      })
      .then((jsonResult) =>{
        console.log(jsonResult);
        const user = jsonResult;
        this.setState({
          UserName: user.UserName,
          FirstName: user.FirstName,
          LastName: user.LastName,
          Zip: user.Zip,
          EmailAddress: user.EmailAddress,
          ProfilePicURL: user.ProfilePicURL,
        })
      });
    
    // fetch user's listings
    fetch('http://localhost:8080/sellerListing/' + params.userId)
      .then((result) => {
        if(result.ok) {
          return result.json();
        } else {
          return [];
        }
      })
      .then((jsonResult) => {
        this.setState({
          numberOfListings: jsonResult.count
        });
        return jsonResult.rows;
      })
      .then((listings) => {
        const listingInfos = listings.map((item) => {
          return (
            <MarketplaceCard 
              data={item}
              className="col-xs-3"
              width={"15rem"}
              height={"25rem"}
              buttonName={"Edit"}
            />
          );
        })
    
        this.setState({
          listings: listingInfos,
        })
      })
  }


render() {

  console.log(this.props)
  return (
    <div>
      {/* <NavigationBar /> */}
      <h3></h3>

      <div className="App-header">
        <Container>
          <Row>
            <Col>
              <Jumbotron>
                <h1>Welcome back {this.state.UserName}!</h1>
                <img 
                  className='profile-pic rounded-circle'
                  src={this.state.ProfilePicURL} 
                />
                <h5># of Postings: {this.state.numberOfListings}</h5>
                <div className='row justify-content-center'>
                  {this.state.listings}
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
            <h1>Welcome back {this.state.UserName}</h1>
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
