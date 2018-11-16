import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';

class SearchField extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchInput: ''
		}
	}

  searchBar = (event) => {
    const search = event.target.value;
    this.setState({searchInput: search});
  }

  searchSubmit = (event) => {
    console.log('searching for: ', event.target.search.value);
		//event.preventDefault();
  }

	render() {
		return(
			<div>
        <Form onSubmit= {this.searchSubmit}>
					<Input
						type= 'text'
						name= 'search'
						placeholder= 'Search for items...'
						onChange= {this.searchBar}
					/>
        </Form>
			</div>
			);
	}
}

export default SearchField;
