import React, { useState } from "react";
import SideBar from "../../Sidenav/sideBar";
import "./employeeStyle.scss";
import { Container, Row, Col } from "react-bootstrap";
import EmployeeCard from "./employeeCard";

function Employee() {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <Container className="employeecontainer">
        <Row style={{width:"100vw"}}>
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
                  <h4>Employee details</h4>
                </div>
                <div className="d-flex my-3">
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
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
                  <h4>Employee details</h4>
                </div>
                <div className="d-flex my-3">
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Employee;
