import React from "react";
import { Modal, Button, Table } from "react-bootstrap";

function PrevNominationModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header  className="info-modal-header">
        <h6>Previous Nominations</h6>
        </Modal.Header>
        <Modal.Body>
          <div></div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Nominated to</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PrevNominationModal;
