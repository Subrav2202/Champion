import React, { useState } from "react";
import './roleStyle.scss'
import '../componentStyle.scss';
import SideBar from "../../Sidenav/sideBar";
import Roles from './Roles'
import { Container, Row, Col } from "react-bootstrap";


function RolesMain() {
    const [collapse, setCollapse] = useState(false);
    return (
        <>
            <Container className="main-container" fluid>
                <Row>
                    <Col md={collapse ? 1 : 2} className="slide">
                        <RolesGridHeader collapse={collapse} setCollapse={setCollapse} />
                    </Col>
                    <Col md={collapse ? 11 : 10} className="p-0">
                        <RolesGridBody />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default RolesMain;


function RolesGridBody() {
    return (
        <>
            <div className="header">
                <h4>Roles details</h4>
            </div>
            <div className="d-flex my-3 px-2">
                <Roles />
            </div>
        </>
    )
}

function RolesGridHeader({ collapse, setCollapse }) {
    return (
        <SideBar
            collapse={collapse}
            setCollapse={() => setCollapse(!collapse)}
        />
    )
}
