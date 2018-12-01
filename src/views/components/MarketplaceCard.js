import React, { Component } from 'react';

class MarketplaceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city : "Unknown",
    };
  }

  componentDidMount() {
    const zip = this.props.data.Zipcode;
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
  }

  render() {
    return (
      <div className="card" style={{maxWidth: this.props.width, height: this.props.height}}>
        <div className="header thumbnail">
          <img 
            className="card-img-top img-fluid"
            src={this.props.data.PictureURL}
            alt="Card image cap"
          />
        </div>
        <div className="card-body">
          <h3 className="card-title">{this.props.data.Title}</h3>
          <h4 className="card-subtitle">${this.props.data.Price}</h4>
          <h5 className="card-text text-muted">{this.state.city + ' ' + this.props.data.Zipcode}</h5>
          <a href="#" className="buyButton round font-weight-bold">{this.props.buttonName}</a>
        </div>
      </div>
    );
  }
};

export default MarketplaceCard;
