import React from 'react';
import {storage} from '../../../firebase';
import {Col, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class PostModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      price: '0.00',
      tag: '',
      tags: [],
      image: null,
      imageURL: '',
      progress: 0
    }

    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.onPriceBlur = this.onPriceBlur.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.onTagClick = this.onTagClick.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleTagKeyPress = this.handleTagKeyPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePriceChange = (event) => {
    this.setState({price: event.target.value});
  }

  onPriceBlur = (event) => {
    const price = parseFloat(event.target.value).toFixed(2);
    if (price > 0) {
      this.setState({price})
    }
    else {
      this.setState({price: 0.00});
    }
  }

  handleTagChange = (event) => {
    const tag = event.target.value;
    const size = tag.length;

    let tags = this.state.tags;

    if (tag[size-1] === ',' && size > 1) {
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

  handleTagKeyPress = (event) => {
    if (event.key === 'Enter') {
      const tag = event.target.value;
      let tags = this.state.tags;
      tags.push(tag);
      this.setState({tag: '', tags});
    }
  }

  handleImageChange = (event) => {
    if (event.target.files[0]) {
      const image = event.target.files[0];
      console.log(image);
      this.setState({
        image: image
      });
      const uploadTask = storage.ref(`listingImages/${image.name}`).put(image);
      uploadTask.on('state_changed',
      (snapshot) => {
        // progress function
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      },
      (error) => {
        // error function
        console.log(error);
      },
      () => {
        // complete function
        storage.ref('listingImages').child(`${image.name}`).getDownloadURL().then(url => {
          console.log(url);
          this.setState({
            imageURL: url
          });
          console.log('url is saved');
        })
      });
    }
  }

  handleSubmit = (event) => {
    const sellerId = window.localStorage.getItem('userId');

    var itemData = {
      Title: event.target.title.value,
      Subtitle: event.target.subtitle.value,
      Category: event.target.category.value,
      Condition: event.target.condition.value,
      Price: event.target.price.value,
      Description: event.target.description.value,
      Zipcode: event.target.zipcode.value,
      PictureURL: this.state.imageURL,
      Tags: this.state.tags,
      SellerId: sellerId? sellerId : 3
    }

    fetch('http://localhost:8080/createListing', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(itemData)
    });

    this.props.toggle();

    event.preventDefault();
  }

  render() {

    const tags = this.state.tags.map((tag, i) =>
      <div className="tag-group" key={i} >
        <a href="#" id="tag" className="col-auto" onClick={() => this.onTagClick(i)}>{tag}</a>
      </div>
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
                <Input type="text" name="subtitle" placeholder="(Author, publisher, company, etc...)"/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={3}>
                <Label >Category:</Label>
              </Col>
              <Col sm={4}>
                <select name="category" >
                  <option value="Appliance">Appliance</option>
                  <option value="Books">Books</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Video Games">Video Games</option>
                  <option value="Other">Other</option>
                </select>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={3}>
                <Label >Condition:</Label>
              </Col>
              <Col sm={4}>
                <select name="condition" >
                  <option value="Brand-New">Brand-New</option>
                  <option value="Like-New">Like-New</option>
                  <option value="Refurbrished">Refurbrished</option>
                  <option value="Used">Used</option>
                  <option value="Well-Worn">Well-Worn</option>
                </select>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={3}>
                <Label >Price (US$):</Label>
              </Col>
              <Col sm={4}>
                <Input name="price" value={this.state.price} onChange={this.handlePriceChange} onBlur={this.onPriceBlur}  placeholder="price in USD" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={3}>Description</Label>
              <Col sm={10}>
                <Input type="textarea" name="description" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={3}>
                <Label >Zip-code:</Label>
              </Col>
              <Col sm={4}>
                <Input type="text" name="zipcode" placeholder="ex: 12345" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={12}>Upload Item Picture</Label>
              <Col sm={6}>
                <Input type="file" name="picture" accept=".jpg,.jpeg,.png" onChange={this.handleImageChange} />
              </Col>
              <Col sm={5}>
                <progress value={this.state.progress} max="100"/>
                <p className='text-center'>{this.state.progress + '%'}</p>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="" sm={5}>Tags</Label>
              <Col sm={10}>
                <Input type="text" name="tags" value={this.state.tag} onChange={this.handleTagChange} onKeyPress={this.handleTagKeyPress} placeholder="comma separated tags" />
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
