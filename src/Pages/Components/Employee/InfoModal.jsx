import React from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { BsPeopleCircle } from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";
import { MdEmail, MdPhone } from "react-icons/md";

function InfoModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header  className="info-modal-header">
        <h6>Employee Information</h6>
        </Modal.Header>
        <Modal.Body>
          <div className="body">
            <IoIosPerson className="bodyicons" />
            <Card.Text className="bodyname">Vishal Yadav</Card.Text>
          </div>
          <div className="body">
            <MdEmail className="bodyicons" />
            <Card.Text className="bodyname">vishal.yadav@neosoftmail.com</Card.Text>
          </div>
          <div className="body">
            <MdPhone className="bodyicons" />
            <Card.Text className="bodyname">1234567899</Card.Text>
          </div>
          <div className="body">
            <BsPeopleCircle className="bodyicons" />
            <Card.Text className="bodyname">Developer</Card.Text>
          </div>
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

export default InfoModal;
