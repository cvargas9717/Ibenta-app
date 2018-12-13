import React, { Component } from 'react';
import { Col, Form, Input, Label } from 'reactstrap';
import Category from './Category.js';

class SearchSidebar extends Component {

  render() {
    return (
      <div className="sidebar" >
        <a>Filters: </a>
        <Category
          onChange={this.props.conditionChange}
          list={this.props.conditions}
          selectedCategory={this.props.selectedCondition}
          className="sidebar-item"
        />
        <Category
          onChange={this.props.priceRangeChange}
          list={this.props.priceRange}
          selectedCategory={this.props.selectedPriceRange}
          className="sidebar-item"
        />
      </div>
    )
  }

}

export default SearchSidebar;
