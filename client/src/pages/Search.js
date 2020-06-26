import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    books: []
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <h2>Search for and Save Books of Internet</h2>
            </Jumbotron>
            <h3>Book Search</h3>
            <form>
              <Input
                // value={this.state.title}
                // onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                // onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Search;