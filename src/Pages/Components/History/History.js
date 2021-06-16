import React, { useState } from "react";
import SideBar from "../../Sidenav/sideBar";
import "./historyStyle.scss";
import '../componentStyle.scss';
import { Container, Row, Col } from "react-bootstrap";
import HistoryEmp from "./HistoryEmp";
import Header from "../Header/Header";
import HistoryTL from "./HistoryTL";
// import EmployeeCard from "./employeeCard";

function History() {
  const [collapse, setCollapse] = useState(false);
  const logindata = JSON.parse(localStorage.getItem("LoginData"));
  const role = logindata.role;

  return (
    <>
      <Container fluid className="main-container">
        <Row className="side-nav">
          <Col md={collapse ? 1 : 2} className="slide">
            <HistoryGridHeader collapse={collapse} setCollapse={setCollapse} />
          </Col>
          <Col md={collapse ? 11 : 10} className="p-0">
            <HistoryGridBody role={role}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default History;

function HistoryGridHeader({ collapse, setCollapse }) {
  return (
    <SideBar
      collapse={collapse}
      setCollapse={() => setCollapse(!collapse)}
    />
  )
}

function HistoryGridBody({ role }) {
  
  return (
    <>
      <Header title="History" />
      <div className="d-flex my-3 px-2">
        <Container>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              {role === "Employee" && <HistoryEmp />}
              {role === "TL" && <HistoryTL/>}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}