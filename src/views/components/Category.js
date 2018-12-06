import React, { Component } from 'react';
import {  } from 'reactstrap';

class Category extends Component {

	render() {
		return(
      <select name="category" onChange={this.props.onChange} className="desktop-category">
          <option value="All Categories">All Categories</option>
          <option value="Appliance">Appliance</option>
          <option value="Books">Books</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Video Games">Video Games</option>
          <option value="Other">Other</option>
      </select>
			);
	}
}

export default Category;
