import React, { Component } from "react";
import API from "../utils/API";
import { DeleteBtn, ViewBtn } from "../components/Btn";
import Jumbotron from "../components/Jumbotron";
import { Col, Section, Container } from "../components/Grid";
import Header from "../components/Header";
import { Input, FormBtn } from "../components/Form";
import {List, ListItem} from "../components/List";

import "../components/List/style.css"

class Saved extends Component {
  state = {
    savedBooks: []
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getSavedBooks()
      .then(res => (
        this.setState({ savedBooks: res.data })
      ))
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
      <Container>
        <Header />

        <Section>
          <h3>Saved Books</h3>
          {this.state.savedBooks.length ? (
            <List>
              {this.state.savedBooks.map(book => (
                <ListItem key={book._id}>
                  <div className="top">
                    <div className="title-author-container">
                      <p className="title">{book.title}</p>
                      <p className="authors">Written By {book.authors.join(', ')}</p>
                    </div>
                    <div className="btns-container">
                      <ViewBtn link={book.link} />
                      <DeleteBtn deleteHandler={this.handleDelete(book._id)} />
                    </div>
                  </div>
                  <div className="img-desc-container">
                    <img src={book.image} alt={book.title}/>
                    <p>{book.description}</p>
                  </div>

                </ListItem>
              ))}
            </List>
          ) : (
            <p className="message">There is no saved books.</p>
          )}
        </Section>
      </Container>
    )
  }
}

export default Saved;