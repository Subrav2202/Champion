import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import './employeeStyle.scss'
  
function Nominatemodel(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="info-modal-header">
          <h6>Add reasons for nomination</h6>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="outline-danger" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="outline-success">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Nominatemodel;
