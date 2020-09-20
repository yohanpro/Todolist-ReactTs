import React, { useState, useRef } from "react";
import {
  Button,
  Modal,
  Label,
  Input,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  ModalHeader,
} from "reactstrap";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

import Icon from "../Icon";
import ConfirmModal from "./confirmModal";

interface ModalProps {
  modal: boolean;
  toggle: (target: string) => void;
  id: number;
  title: string;
  completed: boolean;
}

const EditModal = (props: ModalProps) => {
  const { modal, toggle } = props;
  const { completed, title } = props;

  const [isEdited, setIsEdited] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);

  const nestedModalState = atom({
    key: "myTextstate", // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
  });

  const [text, setText] = useRecoilState(nestedModalState);

  const taskInput = useRef<HTMLInputElement>(null);
  const completed_1_Input = useRef<HTMLInputElement>(null);
  const completed_2_Input = useRef<HTMLInputElement>(null);

  const toggleNested = (action: string) => {
    if (isEdited || action === "delete") {
      setNestedModal(!nestedModal);
    } else {
      toggle("Edit");
    }
  };

  const EditAction = (action: any) => {
    if (taskInput.current) {
      taskInput.current.disabled = false;
    }

    if (completed_1_Input.current && completed_2_Input.current) {
      completed_1_Input.current.disabled = false;
      completed_2_Input.current.disabled = false;
    }

    setText(action);
    setIsEdited(true);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={() => toggle("")}>
        <ModalBody>
          <ConfirmModal nestedModal={nestedModal} toggleNested={toggleNested} />
          <Form className="Todo__Edit">
            <FormGroup disabled>
              <Label>Task</Label>
              <Input
                type="textarea"
                name="Task"
                placeholder={title}
                innerRef={taskInput}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label>Completed</Label>
              <div className="form__completed">
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      id="radio"
                      name="complete"
                      defaultChecked={completed}
                      innerRef={completed_1_Input}
                      disabled
                    />{" "}
                    Yes
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      id="radio"
                      name="complete"
                      defaultChecked={!completed}
                      innerRef={completed_2_Input}
                      disabled
                    />{" "}
                    No
                  </Label>
                </FormGroup>
              </div>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button className="btn btn_modal" onClick={() => EditAction("edit")}>
            <Icon color="#607d8b" className="mr-1" size={25} icon="pencil" />
            EDIT
          </Button>{" "}
          <Button
            className="btn btn_modal"
            onClick={() => toggleNested("delete")}
          >
            <Icon color="#607d8b" className="mr-1" size={25} icon="bin" />
            DELETE
          </Button>
          <Button
            className="btn btn_modal"
            onClick={() => toggleNested("closed")}
          >
            <Icon
              color="#607d8b"
              className="mr-1"
              size={25}
              icon="cancel-circle"
            />
            CLOSE
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditModal;
