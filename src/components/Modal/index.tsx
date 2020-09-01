import React, { useState } from 'react';
import { Button, Modal, Label, Input, ModalBody, ModalFooter, Form, FormGroup } from 'reactstrap';
import Icon from '../Icon';

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
	console.log('EditModal -> completed', completed);

	return (
		<div>
			<Modal isOpen={modal} toggle={() => toggle('')}>
				{/* <Modal isOpen={modal} toggle={toggle} className={className}> */}

				<ModalBody>
					<Form className="Todo__Edit">
						<FormGroup disabled>
							<Label>Task</Label>
							<Input type="textarea" name="Task" placeholder={title} />
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
											checked={completed}
											disabled
										/>{' '}
										Yes
									</Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input
											type="radio"
											id="radio"
											name="complete"
											checked={!completed}
											disabled
										/>{' '}
										No
									</Label>
								</FormGroup>
							</div>
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button className="btn btn_modal" onClick={() => toggle('')}>
						<Icon color="#607d8b" className="mr-1" size={25} icon="pencil" />
						EDIT
					</Button>{' '}
					<Button className="btn btn_modal" onClick={() => toggle('Edit')}>
						<Icon color="#607d8b" className="mr-1" size={25} icon="bin" />
						DELETE
					</Button>
					<Button className="btn btn_modal" onClick={() => toggle('Edit')}>
						<Icon color="#607d8b" className="mr-1" size={25} icon="cancel-circle" />
						CLOSE
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default EditModal;
