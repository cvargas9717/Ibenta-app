import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js';

class ListingInfoPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Subtitle: '',
      Category: '',
      Condition: '',
      Price: '',
      Description: '',
      Zipcode: '',
      PictureURL: '',
      Tags: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/listingInfo')
    .then((result) => {
      if(result.ok) {
        return result.json();
      } else {
        return [];
      }
    })
    .then((jsonResult) =>{
      return jsonResult[5];
    })
    .then((item) => {
      this.setState({
        Title: item.Title,
        Subtitle: item.Subtitle,
        Category: item.Category,
        Condition: item.Condition,
        Price: item.Price,
        Description: item.Description,
        Zipcode: item.Zipcode,
        PictureURL: item.PictureURL,
        Tags: item.Tags,
      }, function () {
        console.log(this.state);
    });
    })
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="App-header">
          
        </div>
      </div>
    );
  }
}

export default ListingInfoPage;