import React from "react";
import { Container, Row, Col } from "reactstrap";

const AddTask: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col xs="3">+</Col>
        <Col xs="auto">New Task</Col>
      </Row>
    </Container>
  );
};

export default AddTask;
