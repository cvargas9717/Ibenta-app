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
        const sellerId = item.SellerId;
        const zip = item.Zipcode;
        fetch('http://localhost:8080/userInfo/' + sellerId)
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
      });
    }

  render() {
    const tags = this.state.Tags.map((tag, i) =>
      <div className="tag-group">
        <a href="#" id="tag" className="col-auto" key={i}>{tag}</a>
      </div>
    );

    return (
      <div className="App-header">
        <Container>
          <Jumbotron>
          {/* <Row>
            <Col> */}
            <div className="row justify-content-center">

                <div className="col-xs-7">
                  <img 
                    className="img-thumbnail listing-pic"
                    src={this.state.PictureURL} 
                  />
                  <h5>{this.state.city + ' ' + this.state.Zipcode}</h5>
                </div>

                <div className="col-xs-5 text-left" id="listing-info-section">
                  <img 
                    className="small-profile-pic rounded-circle"
                    src={this.state.SellerProfilePicURL}
                  />
                  
                  {this.state.SellerName}
                  <div className="divider"></div>
                  <a href={`mailto:${this.state.SellerEmailAddress}`}>Contact</a>
                  
                  <hr />

                  <h3>{this.state.Title}</h3>
                  <h4>{this.state.Subtitle}</h4>
                    {/* TODO: Beautify the UI */}
                    <div>Category: {this.state.Category}</div>
                    <div>Condition: {this.state.Condition}</div>
                    <div>Price: {'$' + this.state.Price}</div>
                    <div>Description: {this.state.Description}</div>
                    <br />
                    <div>{tags}</div>


                </div>
                
            </div>
            {/* </Col>
          </Row> */}
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default ListingInfoPage;