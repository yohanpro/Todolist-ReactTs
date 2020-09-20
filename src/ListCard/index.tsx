import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import EditModal from "src/components/Modal";

interface CardProps {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const ListCard: React.FC<CardProps> = (props: CardProps) => {
  const { title, completed } = props;

  const [editModal, setEditModal] = useState(false);

  const toggle = (targetModal: string) => {
    switch (targetModal) {
      case "Edit":
        setEditModal(!editModal);
        break;

      default:
        break;
    }
  };

  return (
    <Card>
      <CardBody>
        <div className="list__main" onClick={() => toggle("Edit")}>
          <div className="list-task">
            <div>Task</div>
            <span className="list-task__subTitle">{title}</span>
          </div>
          <div className="list-due mt-4">
            <div>Completed</div>
            <span className="list-task__dueDate">
              {completed ? "Yes" : "No"}
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
      <EditModal modal={editModal} toggle={toggle} {...props} />
    </Card>
  );
};

export default ListCard;
