import React, { Component } from "react";
import API from "../utils/API";
import { DeleteBtn, ViewBtn } from "../components/Btn";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Header from "../components/Header";
import { Input, FormBtn } from "../components/Form";
import {List, ListItem} from "../components/List";

class Saved extends Component {
  state = {
    savedBooks: []
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getSavedBooks()
      .then(res => {
          console.log(res.data);
          this.setState({ savedBooks: res.data });
      })
      .catch(err => console.log(err));
  }

  handleDelete = id => {
    return () => {
      API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <Container fluid>
        <Header />

        <Row>
          <Col size="md-12">
            <h3>Saved Books</h3>
            {this.state.savedBooks.length ? (
              <List>
                {this.state.savedBooks.map(book => (
                  <ListItem key={book._id}>
                    <p>Title: {book.title}</p>
                    <p>Authors: {book.authors.join(', ')}</p>
                    <img src={book.image} alt={book.title}/>
                    <p>Description: {book.description}</p>
                    <ViewBtn link={book.link} />
                    <DeleteBtn deleteHandler={this.handleDelete(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <p>There is no saved books.</p>
            )}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Saved;