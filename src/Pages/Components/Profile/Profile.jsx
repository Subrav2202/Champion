import React, { useState } from "react";
import ProfileCard from "./profileCard";
import "./ProfileStyle.scss"
import '../componentStyle.scss';
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../../Sidenav/sideBar";
import Header from "../Header/Header";

function Profile() {
  const [collapse, setCollapse] = useState(false);
  return (
    <Container className="main-container" fluid>
      <Row className="side-nav p-0" style={{ position: "relative" }}>
        <Col md={collapse ? 1 : 2} className="slide" style={{ position: "fixed" }}>
          <ProfileGridSidebar collapse={collapse} setCollapse={setCollapse} />
        </Col>
        <Col md={{ span: collapse ? 11 : 10, offset: collapse ? 1 : 2 }} className="px-1" style={{height: '100vh'}}>
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
      <Header title="Profile" />
      <div style={{ height: "85%" }} className="d-flex justify-content-center align-items-center">
        {/* <div className="d-flex justify-content-center align-items-center"> */}
        <ProfileCard />
        {/* </div> */}
      </div>
    </>
  )
}

function ProfileGridSidebar({ collapse, setCollapse }) {
  return (
    <>
      <SideBar
        collapse={collapse}
        setCollapse={() => setCollapse(!collapse)}
      />
    </>
  )
}