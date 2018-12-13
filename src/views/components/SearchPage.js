import React, { Component } from 'react';
import MarketplaceCard from './MarketplaceCard.js';
import NavigationBar from './NavigationBar.js';
import SearchSidebar from './SearchSidebar.js'
import {  } from 'reactstrap';
import queryString from 'query-string';

class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postings: [],
      selectedCondition: 'All Conditions',
      conditions: [
        {
          id: 0,
          title: 'All Conditions',
        },
        {
          id: 1,
          title: 'Brand-New',
        },
        {
          id: 2,
          title: 'Like-New',
        },
        {
          id: 3,
          title: 'Refurbrished',
        },
        {
          id: 4,
          title: 'Used',
        },
        {
          id: 5,
          title: 'Well-Worn',
        }
      ],
      selectedPriceRange: '$0.00-$9999.99',
      priceRange: [
        {
          id: 0,
          title: '$0.00-$9999.99',
        },
        {
          id: 1,
          title: '$0.00-$9.99',
        },
        {
          id: 2,
          title: '$10-$19.99',
        },
        {
          id: 3,
          title: '$20.00-$39.99',
        },
        {
          id: 4,
          title: '$40.00-$74.99',
        },
        {
          id: 5,
          title: '$75.00-$9999.99',
        }
      ]
    }
    this.conditionChange = this.conditionChange.bind(this);
    this.priceRangeChange = this.priceRangeChange.bind(this);
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
    // const category = params.state.category;
    // const keywords = params.state.keywords;
    const values = queryString.parse(params.search)
    const category = values.category;
    const keywords = values.keywords;
    const condition = this.state.selectedCondition;
    const priceRange = this.state.selectedPriceRange;
    console.log(category + ' ' + keywords);
    let postings = [];
    for (var i=0; i < jsonResult.length; i++) {
      if (this.checkParams(category, condition, priceRange, jsonResult[i]) && this.matchKeywords(keywords, jsonResult[i]) ) {
        let item = (<div className="item-group" key={i}>
                      <MarketplaceCard className="col-auto" data={jsonResult[i]} width={"50rem"} height={"25rem"} buttonName={"I want it!"}/>
                   </div>)
                   console.log(this.props);
        postings.push(item);
      }
    }
    if (postings.length === 0) {
      console.log("The search came up empty!");
      let empty = (<div className="white-text">The search came up empty!</div>)
      postings.push(empty);
    }
    this.setState({postings: postings});
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
        if (keywords === tags[j]) {
          return true;
        }
      }

    }

    return false;
  }

  conditionChange = (event) => {
    this.setState({
      selectedCondition: event.target.textContent
    });
    this.fetchLisings();
  }

  priceRangeChange = (event) => {
    this.setState({
      selectedPriceRange: event.target.textContent
    });
    this.fetchLisings();
  }

  checkParams = (category, condition, priceRange, item) => {
    let matchingCategory = (category === 'All Categories' || item.Category === category);
    let matchingCondition = (condition === 'All Conditions' || item.Condition === condition);
    let priceArray = priceRange.split('-');
    let lowerPrice = parseInt(priceArray[0].substr(1));
    let upperPrice = parseInt(priceArray[1].substr(1));
    let fitPrice = (item.Price >= lowerPrice) && (item.Price <= upperPrice);
    return (matchingCategory) && (matchingCondition) && (fitPrice);
  }

  render() {
    console.log('this is the search page component');
    return (
      <div>
        <SearchSidebar
          conditionChange={this.conditionChange}
          conditions={this.state.conditions}
          selectedCondition={this.state.selectedCondition}
          priceRangeChange={this.priceRangeChange}
          priceRange={this.state.priceRange}
          selectedPriceRange={this.state.selectedPriceRange}
        />
        <div className="App-header">
          <div className="row justify-content-center">
            {this.state.postings}
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPage;
