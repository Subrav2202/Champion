import React, { useState} from "react";
import SideBar from "../../Sidenav/sideBar";
import "./dashboardStyle.scss";
import '../componentStyle.scss';
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import Header from '../Header/Header'
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
import { chartsarray } from './chartsData'
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
        <Row className="side-nav p-0">
          <Col md={collapse ? 1 : 2} className="slide">
            <DashboardGridHeader collapse={collapse} setCollapse={setCollapse} />
          </Col>
          <Col md={collapse ? 11 : 10} className="p-0">
            <DashboardGridBody  month={month} setmonth={(val) => setmonth(val)} />
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

function DashboardGridBody({setmonth, month}) {
  return (
    <>  
      {/* style={{width:"inherit",position:"absolute"}} */}
      <Header title="Dashboard" />
      <div className="d-flex my-3 px-2" >
        <Container fluid className="p-0">
          <Row>
            <Col md={{ span: 8, offset: 1 }}>
              {/* <dashboardContent/> */}
              <Card>
                <Card.Body>
                  {/* <HighchartsReact highcharts={highcharts} options={options} /> */}
                  <Columnchart month={month}/>
                </Card.Body>
              </Card>
            </Col>
            <Col md={{ span: 3 }} className="d-flex justify-content-center">
              <Accordion style={{width:"50%"}}>
                <Card>
                  <Accordion.Toggle className="accordion-header" as={Button} eventKey="0">
                    {month ? month : "Months"} <BsChevronDown />
                  </Accordion.Toggle>
                  {
                    chartsarray.map((item, index) => {
                      return (
                        <Accordion.Collapse eventKey="0" key={index} style={{ cursor: "pointer" }}>
                          <Card.Body onClick={() => setmonth(item.month)}>{item.month}</Card.Body>
                        </Accordion.Collapse>
                      )
                    })
                  }
                </Card>
              </Accordion>
            </Col>
            <Col md={{ span: 4, offset: 1 }}>
            <Card>
                <Card.Body>
                  <Piechart />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
