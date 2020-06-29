import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Header from "../components/Header";
import { Input, FormBtn } from "../components/Form";

class Saved extends Component {
  state = {
    books: []
  }

  render() {
    return (
      <Container fluid>
        <Header />

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