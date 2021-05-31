import React from "react";
import { Card } from "react-bootstrap";
import "./ProfileStyle.scss";
import { IoIosPerson } from "react-icons/io";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsPeopleCircle } from "react-icons/bs";

function Profile() {
  const data = localStorage.getItem("user");
  const info = JSON.parse(data);
  return (
    <div className="wrapper">
      <Card className="cardWrapper">
        <Card.Header className="imagealign">
          <Card.Img
            variant="top"
            src={info.image}
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
              <Card.Text className="bodyname">{info.email}</Card.Text>
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
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
}

export default Profile;
