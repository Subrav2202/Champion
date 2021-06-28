import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import StateContainer from '../../../Storage/StateContainer'

function ProfileModal(props) {
  const { currentUser } = StateContainer();
  const [updatedValues, setUpdatedValues] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    role: currentUser.role
  })

  const handleEditProfile = (e) => {
    const value = e.target.value;
    setUpdatedValues((updatedValues) => {
      return {
        ...updatedValues,
        [e.target.name]: value,
      };
    });
  }
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="profile-modal-wrapper"
      >
        <Modal.Header className="profile-modal-header">
          <h6>Edit Profile</h6>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                name="firstName"
                defaultValue={currentUser.firstName}
                type="text"
                placeholder="Enter Firstname"
                onChange={handleEditProfile}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>LastName</Form.Label>
              <Form.Control
                name="lastName"
                defaultValue={currentUser.lastName}
                type="text"
                placeholder="Enter Lastname"
                onChange={handleEditProfile}
              />
            </Form.Group>
            {/* {registerError.fullname && <small className="error-tag">{registerError.fullname}</small>} */}
            <br />
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                defaultValue={currentUser.email}
                type="email"
                placeholder="Enter Email"
                onChange={handleEditProfile}
              />
            </Form.Group>
            {/* {registerError.registeremail && <small className="error-tag">{registerError.registeremail}</small>} */}
            {/* <br />
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                name="phone"
                maxLength={10}
                defaultValue={info.phone}
                type="number"
                placeholder="Enter Phone Number"
                onChange={handleEditProfile}
              />
            </Form.Group> */}
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
                className="w-50 p-2"
                name="role"
                as="select"
                custom
                onChange={handleEditProfile}
              >
                <option>Select Role</option>
                <option value="ADMIN">Admin</option>
                <option value="CTO">CTO</option>
                <option value="DIRECTOR">Director</option>
                <option value="DELIVERY_MANAGER">DELIVERY MANAGER</option>
                <option value="TEAM_LEAD">Team Lead</option>
                <option value="ASSOCIATE_TEAM_LEAD">
                  Associate Team Lead
                    </option>
                <option value="MENTOR">Mentor</option>
                <option value="DEVELOPER">Developer</option>
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
