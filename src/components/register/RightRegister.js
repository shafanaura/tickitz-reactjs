import React from "react";
import { Col, Container } from "react-bootstrap";
import "./styles.css";

const RightRegister = (props) => {
  return (
    <Col md={5}>
      <Container>{props.children}</Container>
    </Col>
  );
};

export default RightRegister;
