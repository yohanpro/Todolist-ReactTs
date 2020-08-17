import React from "react";
import { Card, CardBody } from "reactstrap";
import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

const ListCard: React.FC = () => {
  return (
    <Card>
      <CardBody>
        <div className="list__main">
          <div className="list-task">
            <div>Task</div>
            <span className="list-task__subTitle">dkfjdkf</span>
          </div>
          <div className="list-due mt-4">
            <div>due</div>
            <span className="list-task__dueDate">2020.8.17</span>
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
