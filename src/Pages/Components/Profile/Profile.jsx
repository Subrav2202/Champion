import React, { useState } from "react";
import ProfileCard from "./profileCard";
import "./ProfileStyle.scss"
import '../componentStyle.scss';
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../../Sidenav/sideBar";

function Profile() {
  const [collapse, setCollapse] = useState(false);
  return (
    <Container className="main-container" fluid>
      <Row >
        <Col md={collapse ? 1 : 2} className="slide">
          <ProfileGridHeader collapse={collapse} setCollapse={setCollapse} />
        </Col>
        <Col md={collapse ? 11 : 10} className="p-0">
          <ProfileGridBody />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;


function ProfileGridBody() {
  return (
    <>
      <div className="header">
        <h4>Profile</h4>
      </div>
      <div className="d-flex" style={{ height: "85%" }}>
        <div className="d-flex justify-content-center align-items-center">
          <ProfileCard />
        </div>
      </div>
    </>
  )
}

function ProfileGridHeader({ collapse, setCollapse }) {
  return (
    <>
      <SideBar
        collapse={collapse}
        setCollapse={() => setCollapse(!collapse)}
      />
    </>
  )
}