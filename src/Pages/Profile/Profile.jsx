import React from "react";
import { Card } from "react-bootstrap";
import "./ProfileStyle.scss";
import { IoIosPerson } from "react-icons/io";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsPeopleCircle } from "react-icons/bs";

function Profile() {
  // const data= localStorage.getItem("key");
  return (
    <div className="wrapper">
      <Card className="cardWrapper">
        <Card.Header className="imagealign">
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/random"
            className="cardImage"
          />
        </Card.Header>

        <Card.Body style={{ width: "100%" }}>
          <Card.Text>
            <div className="body">
              <icon className="bodyicons">
                <IoIosPerson />
              </icon>
              <h6 className="bodyname">Elon Musk</h6>
            </div>
            <div className="body">
              <icon className="bodyicons">
                <MdEmail />
              </icon>
              <h6 className="bodyname">test@gmail.com</h6>
            </div>
            <div className="body">
              <icon className="bodyicons">
                <MdPhone />
              </icon>
              <h6 className="bodyname">8984592840</h6>
            </div>
            <div className="body">
              <icon className="bodyicons">
                <BsPeopleCircle />
              </icon>
              <h6 className="bodyname">TL</h6>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
}

export default Profile;
