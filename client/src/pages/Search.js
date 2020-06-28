import React, { Component } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    books: [],
    keyword: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.keyword) {
      API.getBooks(this.state.keyword)
        .then(res => {
            console.log(res.data.items);
            this.setState({ books: res.data.items });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <h2>Search for and Save Books of Internet</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3>Book Search</h3>
            <form>
              <Input
                value={this.state.keyword}
                onChange={this.handleInputChange}
                name="keyword"
                placeholder="Enter a title of books you would like to search!"
              />
              <FormBtn
                disabled={!this.state.keyword}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3>Result</h3>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id}>
                    <p>Title: {book.volumeInfo.title}</p>
                    <p>Authors: {book.volumeInfo.authors.join(', ')}</p>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                    <p>Description: {book.volumeInfo.description}</p>
                    <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener">View</a>
                    <button>Save</button>
                  </ListItem>
                ))}
              </List>
            ) : (
              <p>No Results to Display</p>
            )}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Search;