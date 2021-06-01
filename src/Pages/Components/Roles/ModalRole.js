import React,{useState} from "react";
import { Button, Form, Modal, } from "react-bootstrap";

function ModalRole(props) {
    const [roleData, setRoleData] = useState({
        role: "",
        description: ""
    })

    const handleRoleData = (e) => {
        const value = e.target.value;
        setRoleData((roleData)=>{
            return({
                ...roleData,
                [e.target.name]: value,        
            })
        });
    }
    console.log(roleData)
    const handleCloseModal = () => props.setShowModal(false);
    return (
        <>
            <Modal show={props.showModal} onHide={handleCloseModal} centered>
                <Modal.Header>
                    <Modal.Title>
                        {props.modalType === "add" && "Add New Role"}
                        {props.modalType === "edit" && "Edit Role"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Role</Form.Label>
                            <Form.Control name="role"
                                value={props.modalType === "edit" ? props.currentData.role : props.modalType === "add" ? roleData.role : null}
                                onChange={handleRoleData}
                                placeholder="Enter Role"
                                type="text">
                            </Form.Control>
                        </Form.Group>
                        <br/>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description"
                                value={props.modalType === "edit" ? props.currentData.description : props.modalType === "add" ? roleData.description : null}
                                onChange={handleRoleData}
                                placeholder="Enter Role Description"
                                as="textarea">
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalRole
