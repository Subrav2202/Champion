import React, { useState } from "react";
import SideBar from "../../Sidenav/sideBar";
import "./employeeStyle.scss";
import '../componentStyle.scss';
import { Container, Row, Col } from "react-bootstrap";
import EmployeeCard from "./employeeCard";
import Header from "../Header/Header";
// import { AiOutlineMenu } from "react-icons/ai";

function Employee() {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <Container fluid className="main-container">
        {/* <Row className="top-nav">
          <Col>
            <div className="employee-navbar">
              <span>NeoSOFT</span>
              <AiOutlineMenu />
            </div>
            <div>
              <EmployeeGridBody />
            </div>
          </Col>
        </Row> */}
        <Row className="side-nav p-0" style={{ position: "relative" }}>
          <Col md={collapse ? 1 : 2} className="slide" style={{ position: "fixed" }}>
            <EmployeeGridHeader collapse={collapse} setCollapse={setCollapse} />
          </Col>
          <Col md={{ span: collapse ? 11 : 10, offset: collapse ? 1 : 2 }} className="px-1">
            <EmployeeGridBody />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Employee;

function EmployeeGridHeader({ collapse, setCollapse }) {
  return (
    <SideBar
      collapse={collapse}
      setCollapse={() => setCollapse(!collapse)}
    />
  )
}

function EmployeeGridBody() {
  return (
    <>
      <Header title="Employee details" />
      <div className="d-flex my-3 px-2">
        {/* <Container> */}
          <Row className="gy-3 gx-4 justify-content-center">
            <Col md={4} sm={6}>
              <EmployeeCard />
            </Col>
            <Col md={4} sm={6}>
              <EmployeeCard />
            </Col>
            <Col md={4} sm={6}>
              <EmployeeCard />
            </Col>
            <Col md={4} sm={6}>
              <EmployeeCard />
            </Col>
            <Col md={4} sm={6}>
              <EmployeeCard />
            </Col>
          </Row>
        {/* </Container> */}
      </div>
    </>
  )

}