import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ListCard from "src/ListCard";
import { GoPlus } from "react-icons/go";
import { getTodoLists } from "src/actions";

type TodoCards = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const AddTask: React.FC = () => {
  const [todoCards, setTodoCards] = useState<TodoCards[]>([]);

  useEffect(() => {
    getTodoLists().then((data) => {
      setTodoCards(data.slice(0, 5));
    });
  }, []);

  return (
    <Container className="container__addTask">
      <Row className="mt-5 align-items-center">
        <Col xs="4">
          <span>
            <GoPlus size={23} />
          </span>{" "}
          <span>New Task</span>
        </Col>
      </Row>
      <Row>
        {todoCards.map((todo: TodoCards, idx: number) => {
          return <ListCard key={idx} {...todo} />;
        })}
      </Row>
    </Container>
  );
};

export default AddTask;
