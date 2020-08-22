import React from "react";
import { Card, CardBody } from "reactstrap";
import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

interface CardProps {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const ListCard: React.FC<CardProps> = (props: CardProps) => {
  const { id, title, completed, userId } = props;

  return (
    <Card>
      <CardBody>
        <div className="list__main">
          <div className="list-task">
            <div>Task</div>
            <span className="list-task__subTitle">{title}</span>
          </div>
          <div className="list-due mt-4">
            <div>Completed</div>
            <span className="list-task__dueDate">
              {completed ? "Yes" : "Not Yet"}
            </span>
          </div>
        </div>
        <div className="list__iconArea">
          <AiFillEdit
            className="list-icon list__edit"
            size="25"
            color="rgba(113,113,113,1)"
          />
          <BsTrash
            className="list-icon list__delete"
            size="25"
            color="rgba(113,113,113,1)"
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default ListCard;
