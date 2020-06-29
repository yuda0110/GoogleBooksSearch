import React, { Component } from "react";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Header from "../components/Header";
import { Input, FormBtn } from "../components/Form";

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