import React, { useState, useEffect } from "react";
import SideBar from "../../Sidenav/sideBar";
import "./dashboardStyle.scss";
import '../componentStyle.scss';
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import Header from '../Header/Header'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { chartsarray } from './chartsData'
import { BsChevronDown } from 'react-icons/bs'
// import EmployeeCard from "./employeeCard";

function Dashboard() {
  const [collapse, setCollapse] = useState(false);
  let items = [];
  let dates = [];
  let votes = [];
  // const date = new Date();
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const [month, setmonth] = useState(currentMonth)

  if (month) {
    const temp = chartsarray.filter((val) => val.month === month);
    items = temp[0].weeks;
    dates = items.map((val) => val.date)
    votes = items.map((val) => val.vote)
  }
  else {
    const temp = chartsarray.filter((val) => val.month === currentMonth);
    items = temp[0].weeks;
    dates = items.map((val) => val.date)
    votes = items.map((val) => val.vote)
  }

  const options = {
    chart: {
      type: "column",
      zoomType: "xy",
      options3D: {
        alpha: 1,
        beta: 10,
        depth: 1000,
      },
    },
    title: {
      text: `Weekly Votes of ${month ? month : currentMonth}`,
    },
    xAxis: {
      categories: dates,
      title: {
        text: "Dates",
      },
      label: {
        text: "dsd"
      }
    },
    yAxis: {
      title: {
        text: "No of votes",
      },
    },
    series: [
      {
        data: votes,
        name: 'Votes',
        showInLegend: false,
      },
    ],
  };
  return (
    <>
      <Container fluid className="main-container">
        <Row className="side-nav">
          <Col md={collapse ? 1 : 2} className="slide" >
            <DashboardGridHeader collapse={collapse} setCollapse={setCollapse} />
          </Col>
          <Col md={collapse ? 11 : 10} className="p-0">
            <DashboardGridBody highcharts={Highcharts} month={month} options={options} setmonth={(val) => setmonth(val)} />
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

function DashboardGridBody({ highcharts, options, setmonth, month }) {
  return (
    <>
      <Header title="Dashboard" />
      <div className="d-flex my-3 px-2">
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 1 }}>
              {/* <dashboardContent/> */}
              <Card>
                <Card.Body>
                  <HighchartsReact highcharts={highcharts} options={options} />
                </Card.Body>
              </Card>
            </Col>
            <Col md={{ span: 2 }}>
              <Accordion>
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
          </Row>
        </Container>
      </div>
    </>
  )
}