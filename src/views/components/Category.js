import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Category extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
  	  dropdownOpen: false
    };
  }

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	render() {
		return (
			<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className={this.props.className}>

			<DropdownToggle caret color="info">
				{this.props.selectedCategory}
			</DropdownToggle>

			<DropdownMenu>
				{this.props.list.map(element => {
					return (
						<DropdownItem
							id={element.id}
							onClick={this.props.onChange}
						>
							{element.title}
						</DropdownItem>
					);
				})
				}
			</DropdownMenu>

			</ButtonDropdown>
		);
	}
}
// class Category extends Component {

// 	render() {
// 		return(
//       <select name="category" onChange={this.props.onChange} className="desktop-category">
//           <option value="All Categories">All Categories</option>
//           <option value="Appliance">Appliance</option>
//           <option value="Books">Books</option>
//           <option value="Clothing">Clothing</option>
//           <option value="Electronics">Electronics</option>
//           <option value="Video Games">Video Games</option>
//           <option value="Other">Other</option>
//       </select>
// 			);
// 	}
// }

export default Category;
