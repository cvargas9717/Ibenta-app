import React, { Component } from 'react';
import MarketplaceCard from './MarketplaceCard.js';
import NavigationBar from './NavigationBar.js';
import { Col } from 'reactstrap';

class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postings: []
    }

  }

  componentDidMount = () => {
    this.fetchLisings();
  }

  // componentDidUpdate = () => {
  //   this.fetchLisings();
  // }

  fetchLisings = () => {
    fetch('http://localhost:8080/listingInfo')
    .then((result) => {
      if(result.ok) {
        return result.json();
      } else {
        return [];
      }
    })
    .then((jsonResult) =>{
      this.getMatchingItems(jsonResult);
    })
  }

  getMatchingItems = (jsonResult) => {
    const params = this.props.location;
    const category = params.state.category;
    const keywords = params.state.keywords;
    console.log(category + ' ' + keywords);
    let postings = [];
    for (var i=0; i < jsonResult.length; i++) {
      if ((category === 'All Categories' || jsonResult[i].Category === category) && this.matchKeywords(keywords, jsonResult[i]) ) {
        let item = (<div className="item-group" key={i}>
                      <MarketplaceCard className="col-auto" name={jsonResult[i].Title} price={jsonResult[i].Price} zip={jsonResult[i].Zipcode} width={"18rem"} height={"25rem"} buttonName={"I want it!"}/>
                   </div>)
                   console.log(this.props);
        postings.push(item);
      }
    }
    if (postings.length === 0) {
      console.log("The search came up empty!");
    }
    this.setState({postings});
  }

  matchKeywords = (keywords, item) => {
    if (keywords === '') {
      return false;
    }
    const wordsArr = keywords.split(' ');
    const tags = item.Tags;
    const name = item.Title;
    const subtitles = item.Subtitle.split(' ');
    if (keywords.toLowerCase() === name.toLowerCase()) {
      return true;
    }

    for (var i=0; i < wordsArr.length; i++) {
      for (var j=0; j < subtitles.length; j++) {
        if (wordsArr[i].toLowerCase() === subtitles[j].toLowerCase()) {
          return true;
        }
      }
      for (var j=0; j < tags.length; j++) {
        if (wordsArr[i].toLowerCase() === tags[j].toLowerCase()) {
          return true;
        }
      }

    }

    return false;
  }

  render() {

    return (
      <div>
        <NavigationBar />
        <Col className="App-header" >{this.state.postings}</Col>
      </div>
    )
  }
}

export default SearchPage;
