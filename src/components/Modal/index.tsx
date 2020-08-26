import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

type ModalProps = {
  modal: boolean;
  toggle: (target: string) => void;
  id: number;
  title: string;
  completed: boolean;
};

const EditModal = (props: ModalProps) => {
  //   const { buttonLabel, className } = props;

  const { modal, toggle } = props;

  const { completed, title, id } = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={() => toggle("")}>
        {/* <Modal isOpen={modal} toggle={toggle} className={className}> */}

        <ModalBody>{title}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => toggle("")}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={() => toggle("Edit")}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditModal;
