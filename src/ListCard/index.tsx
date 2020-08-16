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

const ListCard: React.FC = () => {
  return (
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
  );
};

export default ListCard;
