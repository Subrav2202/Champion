import React, { useEffect, useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router";
import { OverlayTrigger, Popover, Image } from "react-bootstrap"
import "./Header.scss"
import DefaultProfileImg from "../../../Assets/profile.jpeg"
import StateContainer from '../../../Storage/StateContainer'
import { SidebarAdminData } from "../../Sidenav/sideBarData";
import { SidebarTLData } from "../../Sidenav/sideBarData";
import { SidebarEmpData } from "../../Sidenav/sideBarData";

function Header(props) {
  const { currentUser, source, userrole } = StateContainer();
  const [data, setData] = useState();
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/register");
  };
  useEffect(() => {
    switch (currentUser.role) {
      case "ADMIN":
        setData(SidebarAdminData);
        break;
      case "CTO":
        setData(SidebarAdminData);
        break;
      case "DIRECTOR":
        setData(SidebarAdminData);
        break;
      case "DELIVERY_MANAGER":
        setData(SidebarTLData);
        break;
      case "TEAM_LEAD":
        setData(SidebarTLData);
        break;
      case "ASSOCIATE_TEAM_LEAD":
        setData(SidebarEmpData);
        break;
      case "MENTOR":
        setData(SidebarEmpData);
        break;
      default:
        setData(SidebarEmpData);
        break;
    }
  }, [currentUser.role]);

  return (
    <>
      <Navbar bg="dark" expand="lg" className="responsive-nav" fixed="top">
        <Navbar.Brand href="/"><h1>NeoSOFT</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {
              data && data.map((val) => {
                return (
                  <Nav.Link href={val.path}>{val.icon} {val.title}</Nav.Link>
                )
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="header px-4">
        <br />
        <h4 className="headerpagename">{props.title}</h4>
        <div className="headerusername">
          <h5>{`Welcome, ${currentUser.firstName}`}</h5>
          <OverlayTrigger
            rootClose
            trigger="click"
            placement='bottom'
            //   popperConfig={{ placement: 'bottom-end' }}
            overlay={
              <Popover id="popover-basic">
                <Popover.Title as="div"><h5>{currentUser.firstName} {currentUser.lastName}</h5>
                  <p>{currentUser.email}</p>
                  <p>{userrole}</p>
                </Popover.Title>
                <Popover.Content>
                  <Button variant="danger" size="sm" onClick={handleLogout}>Logout</Button>
                </Popover.Content>
              </Popover>
            }
          >
            <Image src={source ? source : DefaultProfileImg} roundedCircle className="headerpic" />
          </OverlayTrigger>
        </div>
      </div>
    </>
  );
}

export default Header;
