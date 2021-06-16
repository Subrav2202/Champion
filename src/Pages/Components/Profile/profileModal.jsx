import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function ProfileModal(props) {
  const data = localStorage.getItem("user");
  const info = JSON.parse(data);

  const handleRegister = () => {
    console.log("hello")
  }
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="profile-modal-wrapper"
      >
        <Modal.Header className="profile-modal-header">
          <h6>Edit Profile</h6>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name="fullname"
                defaultValue={info.fullname}
                type="text"
                placeholder="Enter Full Name"
                onChange={handleRegister}
              />
            </Form.Group>
            {/* {registerError.fullname && <small className="error-tag">{registerError.fullname}</small>} */}
            <br />
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="registeremail"
                defaultValue={info.registeremail}
                type="email"
                placeholder="Enter email"
                onChange={handleRegister}
              />
            </Form.Group>
            {/* {registerError.registeremail && <small className="error-tag">{registerError.registeremail}</small>} */}
            <br />
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                name="phone"
                maxLength={10}
                defaultValue={info.phone}
                type="number"
                placeholder="Enter Phone Number"
                onChange={handleRegister}
              />
            </Form.Group>
            {/* {registerError.phone && <small className="error-tag">{registerError.phone}</small>} */}
            <br />
            <Form.Group>
              <Form.File
                // onChange={handleFile}
                type="file"
                accept="image/png, image/jpeg"
              // required
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control
                name="role"
                as="select"
                custom
                onChange={handleRegister}
              >
                <option value="Select">Select</option>
                <option value="CTO">CTO</option>
                <option value="Director">Director</option>
                <option value="Team Lead">Team Lead</option>
                <option value="Associate Team Lead">
                  Associate Team Lead
                    </option>
                <option value="Mentor">Mentor</option>
                <option value="Developer">Developer</option>
              </Form.Control>
            </Form.Group>
            <hr />
          </Form>
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

export default ProfileModal;
