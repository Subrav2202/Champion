import React, { useState } from "react";
import ProfileCard from "./profileCard";
import "./ProfileStyle.scss"
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../../Sidenav/sideBar";

function Profile() {
  const [collapse, setCollapse] = useState(false);
  return (
    <Container className="employeecontainer">
      <Row style={{ width: "100vw" }}>
        {collapse ? (
          <>
            <Col md={1} style={{ padding: "0" }}>
              <SideBar
                collapse={collapse}
                setCollapse={() => setCollapse(!collapse)}
              />
            </Col>
            <Col md={11}>
              <div className="employeeheader">
                <h4>Profile</h4>
              </div>
              <div className="d-flex my-3 justify-content-center">
                <ProfileCard />
              </div>
            </Col>
          </>
        ) : (
          <>
            <Col md={2} style={{ padding: "0" }}>
              <SideBar
                collapse={collapse}
                setCollapse={() => setCollapse(!collapse)}
              />
            </Col>
            <Col md={10}>
              <div className="employeeheader">
                <h4>Profile</h4>
              </div>
              <div className="d-flex my-3 justify-content-center">
                <ProfileCard />
              </div>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}

export default Profile;
