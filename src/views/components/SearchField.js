import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';

class SearchField extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchInput: '',
			searchLabel: 'Search'
		}
	}

  searchBar = (event) => {
    const search = event.target.value;
    this.setState({searchInput: search});
  }

  searchSubmit = (event) => {
    console.log('searching for: ', event.target.search);
  }

	render() {
		return(
			<Form onSubmit= {this.props.searchSubmit} className="search-field" >
					<Input
						type= 'text'
						name= 'search'
						placeholder= 'Search for items...'
						onChange= {this.searchBar}
					/>
			</Form>
			);
	}
}

export default SearchField;
