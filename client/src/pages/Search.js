import React, { Component } from "react";
import API from "../utils/API";
import { SaveBtn, ViewBtn } from "../components/Btn";
import { Section, Container } from "../components/Grid";
import Header from "../components/Header";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import socketIOClient from "socket.io-client";

import "../components/List/style.css"
import "./search.css";

class Search extends Component {
  state = {
    books: [],
    keyword: "",
    savedBookIds: []
  }

  // componentWillUnmount() {
  //   this.props.socket.off("book_saved");
  // }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res => {
        const savedBookIdsArr = res.data.map(book => book.bookId);
        this.setState({ savedBookIds: savedBookIdsArr });
      })
      .catch(err => console.log(err));
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
        .then(res => (
          this.setState({ books: res.data.items })
        ))
        .catch(err => console.log(err));

      this.getSavedBooks();
    }
  }

  handleSave = bookData => {
    return event => {
      event.preventDefault();
      API.saveBook({
        bookId: bookData.id,
        title: bookData.volumeInfo.title,
        authors: bookData.volumeInfo.authors,
        description: bookData.volumeInfo.description,
        image: bookData.volumeInfo.imageLinks.thumbnail,
        link: bookData.volumeInfo.infoLink
      })
        .then(res => {
          console.log("Book Saved.");
          this.getSavedBooks();

          // const socket = socketIOClient(this.props.endpoint);
          console.log(this.props.socket);

          this.props.socket.emit("incoming data", {
            title: bookData.volumeInfo.title
          })
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <Container fluid>
        <Header />

        <Section>
          <h3>Book Search</h3>
          <form>
            <div className="form-group">
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
            </div>
          </form>
        </Section>
        <Section>
          <h3>Result</h3>
          {this.state.books.length ? (
            <List>
              {this.state.books.map(book => (
                <ListItem key={book.id}>
                  <div className="top">
                    <div className="title-author-container">
                      <p className="title">{book.volumeInfo.title}</p>
                      <p className="authors">Written By {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : ""}</p>
                    </div>
                    <div className="btns-container">
                      <ViewBtn link={book.volumeInfo.infoLink} />
                      <SaveBtn
                        savedBookIds={this.state.savedBookIds}
                        bookId={book.id}
                        saveHandler={this.handleSave(book)}
                      />
                    </div>
                  </div>
                  <div className="img-desc-container">
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                    <p>{book.volumeInfo.description}</p>
                  </div>
                </ListItem>
              ))}
            </List>
          ) : (
            <p className="message">No Results to Display</p>
          )}
        </Section>
      </Container>
    )
  }
}

export default Search;