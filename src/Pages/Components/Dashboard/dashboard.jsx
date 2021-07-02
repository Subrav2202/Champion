import React, { useState } from "react";
import SideBar from "../../Sidenav/sideBar";
import "./dashboardStyle.scss";
import '../componentStyle.scss';
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import Header from '../Header/Header'
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
import { chartsarray } from './ChartsData'
import { BsChevronDown } from 'react-icons/bs'
// import EmployeeCard from "./employeeCard";
import Columnchart from "./Columnchart"
import Piechart from "./Piechart"

function Dashboard() {
  const [collapse, setCollapse] = useState(false);
  const [month, setmonth] = useState()

  return (
    <>
      <Container fluid className="main-container">
        {/* <Row className="side-nav p-0 maincontent"> */}
        <Row className="side-nav p-0" style={{ position: "relative" }}>
          <Col md={collapse ? 1 : 2} className="slide" style={{ position: "fixed" }}>
            <DashboardGridSidebar collapse={collapse} setCollapse={setCollapse} />
          </Col>
          <Col md={{ span: collapse ? 11 : 10, offset: collapse ? 1 : 2 }} className="px-1">
            <DashboardGridBody month={month} setmonth={(val) => setmonth(val)} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;

function DashboardGridSidebar({ collapse, setCollapse }) {

  return (
    <SideBar
      collapse={collapse}
      setCollapse={() => setCollapse(!collapse)}
    />
  )
}

function DashboardGridBody({ setmonth, month }) {
  const [togglecontrol, settogglecontrol] = useState(false)
  console.log("outside",togglecontrol)
  return (
    <>
      <Header title="Dashboard" />
      <div className="d-flex my-3 px-2"  style={{paddingTop: "70px"}}>
        <Container fluid className="p-0">
          <Row>
            <Col md={{ span: 7 }}>
              {/* <dashboardContent/> */}
              <Card style={{position: "relative"}}>
                <Accordion style={{ position: "absolute",zIndex: "1",right: "2%",top: "2%" }}>
                  <Card>
                  <Accordion.Toggle className="accordion-header" as={Button} variant="default" eventKey="0" onClick={() => { settogglecontrol(true); console.log("toggle",togglecontrol)}}>
                      <div>{month ? month : "Months"} <BsChevronDown /></div>
                    </Accordion.Toggle>
                    {
                      togglecontrol &&
                      chartsarray.map((item, index) => {
                        return (
                          <Accordion.Collapse eventKey="0" key={index} style={{ cursor: "pointer"}} onClick={() => {settogglecontrol(false);console.log("collapse",togglecontrol)}}>
                            <Card.Body  className="accordian-body" onClick={() => setmonth(item.month) }>{item.month}</Card.Body>
                          </Accordion.Collapse>
                        )
                      })
                    }
                  </Card>
                </Accordion>
                <Card.Body>
                  {/* <HighchartsReact highcharts={highcharts} options={options} /> */}
                  <Columnchart month={month} />
                </Card.Body>
              </Card>
            </Col>
            <Col md={{ span: 5 }}>
              <Card>
                <Card.Body>
                  <Piechart />
                </Card.Body>
              </Card>
            </Col>
            {/* <Col md={{ span: 2 }} className="d-flex justify-content-center"> */}
            {/* </Col> */}
          </Row>
        </Container>
      </div>
    </>
  )
}
