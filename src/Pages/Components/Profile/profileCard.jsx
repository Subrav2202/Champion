import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./ProfileStyle.scss";
import { IoIosPerson } from "react-icons/io";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsPeopleCircle } from "react-icons/bs";
import ProfileModal from "./profileModal";

function ProfileCard() {
  const [show, setshow] = useState(false);
  const data = localStorage.getItem("user");
  const info = JSON.parse(data);

  return (
    <>
      <Card className="cardWrapper">
        <Card.Header className="imagealign">
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/random"
            className="cardImage"
          />
        </Card.Header>

        <Card.Body style={{ width: "100%" }}>
          <div className="body">
            <IoIosPerson className="bodyicons" />
            <Card.Text className="bodyname">{info.fullname}</Card.Text>
          </div>
          <div className="body">
            <MdEmail className="bodyicons" />
            <Card.Text className="bodyname">{info.registeremail}</Card.Text>
          </div>
          <div className="body">
            <MdPhone className="bodyicons" />
            <Card.Text className="bodyname">{info.phone}</Card.Text>
          </div>
          <div className="body">
            <BsPeopleCircle className="bodyicons" />
            <Card.Text className="bodyname">{info.role}</Card.Text>
          </div>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          <Button variant="outline-primary" onClick={() => setshow(true)}>
            Edit
          </Button>
        </Card.Footer>
      </Card>
      {show && <ProfileModal show={show} onHide={() => setshow(false)} />}
    </>
  );
}

export default ProfileCard;
