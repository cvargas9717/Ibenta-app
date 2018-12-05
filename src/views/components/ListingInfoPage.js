import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js';
import {Jumbotron, Container, Row, Col} from 'reactstrap';

class ListingInfoPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      SellerId: '',
      Title: '',
      Subtitle: '',
      Category: '',
      Condition: '',
      Price: '',
      Description: '',
      Zipcode: '',
      PictureURL: '',
      Tags: [],
      city: 'Unknown',
      SellerName: '',
      SellerEmailAddress: '',
      SellerProfilePicURL: '',
    }
  }

  componentDidMount() {
    console.log('this is the listing page component');
    const params = this.props.match.params;
    console.log(params);
    console.log(params.listingId);
    fetch('http://localhost:8080/listingInfo/' + params.listingId)
      .then((result) => {
        if(result.ok) {
          return result.json();
        } else {
          return [];
        }
      })
      .then((jsonResult) =>{
        console.log(jsonResult);
        const item = jsonResult;
        this.setState({
          // Id: item.id,
          SellerId: item.SellerId,
          Title: item.Title,
          Subtitle: item.Subtitle,
          Category: item.Category,
          Condition: item.Condition,
          Price: item.Price,
          Description: item.Description,
          Zipcode: item.Zipcode,
          PictureURL: item.PictureURL,
          Tags: item.Tags,
          SellerName: '',
          SellerEmailAddress: '',
          SellerProfilePicURL: '',
        });
        return jsonResult.Zipcode;
      })
      .then((zip) => {
        if (zip.length === 5) {
          const url = "https://ctp-zip-api.herokuapp.com/zip/" + zip;
          fetch(url)
            .then((result) => {
              if (result.ok) {
                return result.json();
              } else {
                return null;
              }
            })
            .then((jsonResult) => {
              if (jsonResult) {
                const cityName = jsonResult[0].LocationText;
                this.setState({
                  city : cityName
                });
              }
          });
        }
      })

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
          SellerName: user.UserName,
          SellerEmailAddress: user.EmailAddress,
          SellerProfilePicURL: user.ProfilePicURL,
        })
      });

  }

  render() {
    return (
      <div className="App-header">
        <Container>
          <Row>
            <Col>
              <Jumbotron>
                {/* <h1>Welcome back, {this.state.UserName}!</h1> */}
                <img 
                  className='img-thumbnail'
                  src={this.state.PictureURL} 
                />
                <h5>{this.state.city}</h5>
                <div className='row justify-content-center'>
                {/* TODO: Beautify the UI */}
                  {this.state.listings}
                  {this.state.Title}
                  {this.state.Subtitle}
                  {this.state.Category}
                  {this.state.Condition}
                  {this.state.Price}
                  {this.state.Description}
                  {this.state.Tags}
                </div>

              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ListingInfoPage;