import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./ProfileStyle.scss";
import { IoIosPerson } from "react-icons/io";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsPeopleCircle } from "react-icons/bs";
import ProfileModal from "./profileModal";
import DefaultProfileImg from "../../../Assets/profile.jpeg"
import StateContainer from '../../../Storage/StateContainer'

function ProfileCard() {
  const [show, setshow] = useState(false);
  const { currentUser, source, userrole } = StateContainer();
  return (
    <>
      <Card className="profile-cardWrapper">
        <Card.Header className="imagealign">
          {/* <Card.Img variant="top" src="https://source.unsplash.com/random" className="cardImage" /> */}
          <Card.Img variant="top" src={source ? source : DefaultProfileImg} alt="profileImg" className="cardImage" />
        </Card.Header>

        <Card.Body className="w-100">
          <div className="body">
            <IoIosPerson className="bodyicons" />
            <Card.Text className="bodyname">{currentUser.firstName} {currentUser.lastName}</Card.Text>
          </div>
          <div className="body">
            <MdEmail className="bodyicons" />
            <Card.Text className="bodyname">{currentUser.email}</Card.Text>
          </div>
          {/* <div className="body">
            <MdPhone className="bodyicons" />
            <Card.Text className="bodyname">{info.phone}</Card.Text>
          </div> */}
          <div className="body">
            <BsPeopleCircle className="bodyicons" />
            <Card.Text className="bodyname">{userrole}</Card.Text>
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center w-100 profile-card-footer">
          <Button variant="outline-info" onClick={() => setshow(true)}>
            Edit
          </Button>
        </Card.Footer>
      </Card>
      {show && <ProfileModal show={show} onHide={() => setshow(false)} />}
    </>
  );
}

export default ProfileCard;
