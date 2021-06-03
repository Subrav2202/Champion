import React, { useState } from "react";
import SideBar from "../../Sidenav/sideBar";
import "./employeeStyle.scss";
import { Container, Row, Col } from "react-bootstrap";
import EmployeeCard from "./employeeCard";
// import { AiOutlineMenu } from "react-icons/ai";

function Employee() {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <Container fluid className="emp-container">
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
        <Row className="side-nav">
          <Col md={collapse ? 1 : 2} className="p-0">
            <EmployeeGridHeader collapse={collapse} setCollapse={setCollapse} />
          </Col>
          <Col md={collapse ? 11 : 10} className="p-0">
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
      <div className="header">
        <h4>Employee details</h4>
      </div>
      <div className="d-flex my-3 px-2">
        <Container>
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
        </Container>
      </div>
    </>
  )

}