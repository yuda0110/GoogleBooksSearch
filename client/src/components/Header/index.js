import React from "react";
import Jumbotron from "../Jumbotron";
import { Col, Row } from "../Grid";

const Header = () => {
  return(
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>(React) Google Books Search</h1>
          <h2>Search for and Save Books of Internet</h2>
        </Jumbotron>
      </Col>
    </Row>
  );
}

export default Header;