import React from 'react';
import {Col, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PostModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      condition: 'Brand-New',
      category: 'Appliance',
      price: '0.00',
      tag: '',
      tags: []
    }

    this.handleConditionChange = this.handleConditionChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.onTagClick = this.onTagClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleConditionChange = (event) => {
    this.setState({condition: event.target.value});
  }

  handleCategoryChange = (event) => {
    this.setState({category: event.target.value});
  }

  handlePriceChange = (event) => {
    this.setState({price: event.target.value});
  }

  handleTagChange = (event) => {
    const tag = event.target.value;
    const size = tag.length;

    let tags = this.state.tags;

    if (tag[size-1] === ',') {
      tags.push(tag.substring(0,size-1));
      this.setState({tag: '', tags});
    }
    else {
      this.setState({tag, tags});
    }
  }

  onTagClick = (i) => {
    let tags = this.state.tags;

    tags.splice(i, 1);
    this.setState({tags});
  }

  handleSubmit = (event) => {
    const price = parseFloat(event.target.price.value).toFixed(2)

    var itemData = {
      Title: event.target.title.value,
      Subtitle: event.target.subtitle.value,
      Category: event.target.category.value,
      Condition: event.target.condition.value,
      Price: price,
      Description: event.target.description.value,
      Zipcode: event.target.zipcode.value,
      Picture: event.target.picture.value,
      Tags: this.state.tags
    }

    console.log(itemData);

    //fetch('http://localhost:8080/createItem', {
    //  method: 'POST',
    //  headers: {'Content-Type':'application/json'},
    //  body: JSON.stringify(itemData)
    //});

    event.preventDefault();
  }

  render() {

    const tags = this.state.tags.map((tag, i) =>
      <a href="#" className="col-auto" key={i} onClick={() => this.onTagClick(i)}>{tag}[x] </a>
    );

    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}>Create an Item Listing</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label for="" sm={3}>Item Name</Label>
              <Col sm={10}>
                <Input type="text" name="title" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={3}>Subtitle</Label>
              <Col sm={10}>
                <Input type="text" name="subtitle" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={3}>Category:</Label>
                <select name="category" value={this.state.category} onChange={this.handleCategoryChange}>
                  <option value="Appliance">Appliance</option>
                  <option value="Books">Books</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Video Games">Video Games</option>
                  <option value="Other">Other</option>
                </select>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={3}>Condition:</Label>
              <select name="condition" value={this.state.condition} onChange={this.handleConditionChange}>
                <option value="Brand-New">Brand-New</option>
                <option value="Like-New">Like-New</option>
                <option value="Refurbrished">Refurbrished</option>
                <option value="Used">Used</option>
                <option value="Well-Worn">Well-Worn</option>
              </select>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={4}>Price</Label>
              <Col sm={10}>
                <Input name="price" value={this.state.price} onChange={this.handlePriceChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={3}>Description</Label>
              <Col sm={10}>
                <Input type="textarea" name="description" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={3}>Zipcode</Label>
              <Col sm={10}>
                <Input type="text" name="zipcode" placeholder="ex: 12345" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={5}>Upload Item Picture</Label>
              <Col sm={10}>
                <Input type="file" name="picture"  />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={5}>Tags</Label>
              <Col sm={10}>
                <Input type="text" name="tags" value={this.state.tag} onChange={this.handleTagChange} placeholder="comma separated tags" />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                {tags}
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={10}>
                <Button color="success" data-dismiss="modal" onClick={this.toggle}>List Item</Button>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}

export default PostModal;
