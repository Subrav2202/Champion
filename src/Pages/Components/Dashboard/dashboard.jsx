import React from "react";
import SideBar from "../../Sidenav/sideBar";
import "./dahsboardStyle.scss";
import { Container, Row, Col } from "react-bootstrap";

function dashboard() {
  return (
    <>
      <Container fluid className="container">
        <Row>
          <Col md={2}>
          <SideBar />
          </Col>
          <Col md={10}>Dashboard</Col>
        </Row>
      </Container>
    </>
  );
}

export default dashboard;
