import React, { useState } from "react";
import SideBar from "../../Sidenav/sideBar";
import "./historyStyle.scss";
import '../componentStyle.scss';
import { Container, Row, Col } from "react-bootstrap";
import HistoryEmp from "./HistoryEmp";
import Header from "../Header/Header";
import HistoryTL from "./HistoryTL";
import { useSelector } from "react-redux";
// import EmployeeCard from "./employeeCard";

function History() {
  const [collapse, setCollapse] = useState(false);
  const currentUser = useSelector((state) => state.users);
  // const logindata = JSON.parse(localStorage.getItem("LoginData"));
  // const role = logindata.role;

  return (
    <>
      <Container fluid className="main-container">
      <Row className="side-nav p-0" style={{ position: "relative" }}>
      <Col md={collapse ? 1 : 2} className="slide" style={{ position: "fixed" }}>
            <HistoryGridSidebar collapse={collapse} setCollapse={setCollapse} />
          </Col>
          <Col md={{ span: collapse ? 11 : 10, offset: collapse ? 1 : 2 }} className="px-1">
            <HistoryGridBody role={currentUser.role}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default History;

function HistoryGridSidebar({ collapse, setCollapse }) {
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
      <div className="d-flex my-3 px-2"  style={{paddingTop: "70px"}}>
        <Container>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              {role === "DEVELOPER" && <HistoryEmp />}
              {role  === "TEAM_LEAD" && <HistoryTL/>}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}