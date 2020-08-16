import React from "react";
import { Container, Row, Col } from "reactstrap";
import ListCard from "src/ListCard";

const AddTask: React.FC = () => {
  return (
    <Container className="container__addTask">
      <Row className="mt-5 align-items-center">
        <Col xs="4">
          <span>+ </span> New Task
        </Col>
      </Row>
      <Row>
        <ListCard />
      </Row>
    </Container>
  );
};

export default AddTask;
