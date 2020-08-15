import React from "react";
import {
  Container,
  Row,
  Col,
  CardTitle,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const AddTask: React.FC = () => {
  return (
    <Container className="container__addTask">
      <Row className="mt-5 align-items-center">
        <Col xs="4">
          <span>+ </span> New Task
        </Col>
      </Row>
      <Row>
        <Card>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button className="btn-block">Button</Button>
          </CardBody>
        </Card>
      </Row>
    </Container>
  );
};

export default AddTask;
