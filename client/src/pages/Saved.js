import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Saved extends Component {
  state = {
    books: []
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
            <h3>Saved Books</h3>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Saved;