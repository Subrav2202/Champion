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
        <Card.Body style={{ width: "100%" }}>
          <div className="d-flex justify-content-center align-items-center">
            <img src="https://source.unsplash.com/random" style={{width:"40%",height:'40%',borderRadius:"50%"}} alt="img" />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Button variant="outline-success">Nominate</Button>
          </div>
        </Card.Body>
      </Card>
      {show && <ProfileModal show={show} onHide={() => setshow(false)} />}
    </>
  );
}

export default ProfileCard;
