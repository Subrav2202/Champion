import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
function Nominatemodel(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
        <h6>Add reasons for nomination</h6>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <FormControl as="textarea" aria-label="With textarea" />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success">Submit</Button>
          <Button variant="outline-danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Nominatemodel;
