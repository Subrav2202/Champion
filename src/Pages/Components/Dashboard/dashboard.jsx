import React, { useState } from "react";
import SideBar from "../../Sidenav/sideBar";
import "./dashboardStyle.scss";
import '../componentStyle.scss';
import { Container, Row, Col } from "react-bootstrap";
import Header from '../Header/Header'
// import EmployeeCard from "./employeeCard";

function Dashboard() {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <Container fluid className="main-container">
        <Row className="side-nav">
          <Col md={collapse ? 1 : 2} className="slide" >
            <DashboardGridHeader collapse={collapse} setCollapse={setCollapse} />
          </Col>
          <Col md={collapse ? 11 : 10} className="p-0">
            <DashboardGridBody />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;

function DashboardGridHeader({ collapse, setCollapse }) {
  return (
    <SideBar
      collapse={collapse}
      setCollapse={() => setCollapse(!collapse)}
    />
  )
}

function DashboardGridBody() {
  return (
    <>
      <Header title="Dashboard" />
      <div className="d-flex my-3 px-2">
        <Container>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              {/* <dashboardContent/> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}