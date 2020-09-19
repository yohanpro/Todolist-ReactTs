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
} from "reactstrap";
import Icon from "../Icon";

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

  const taskInput = useRef<HTMLInputElement>(null);
  const completed_1_Input = useRef<HTMLInputElement>(null);
  const completed_2_Input = useRef<HTMLInputElement>(null);

  const EditAction = () => {
    if (taskInput.current) {
      taskInput.current.disabled = false;
    }

    if (completed_1_Input.current && completed_2_Input.current) {
      console.log(completed_1_Input);
      completed_1_Input.current.disabled = false;
      completed_2_Input.current.disabled = false;

      // completed_1_Input.current.checked = "false";
      // completed_2_Input.current.checked = "false";
    }
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={() => toggle("")}>
        {/* <Modal isOpen={modal} toggle={toggle} className={className}> */}
        <ModalBody>
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
          <Button className="btn btn_modal" onClick={EditAction}>
            <Icon color="#607d8b" className="mr-1" size={25} icon="pencil" />
            EDIT
          </Button>{" "}
          <Button className="btn btn_modal" onClick={() => toggle("")}>
            <Icon color="#607d8b" className="mr-1" size={25} icon="bin" />
            DELETE
          </Button>
          <Button className="btn btn_modal" onClick={() => toggle("Edit")}>
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
