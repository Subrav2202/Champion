import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import {OverlayTrigger,Popover,Image} from "react-bootstrap"
import "./Header.scss"
import DefaultProfileImg from "../../../Assets/profile.jpeg"


function Header(props) {
  const data = localStorage.getItem("user");
  const info = JSON.parse(data);
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("LoginData");
    history.push("/register");
  };
  return (
    <div className="header px-4">
      <h4>{props.title}</h4>
      <div>
        <OverlayTrigger
         rootClose
          trigger="click"
          placement='bottom'
        //   popperConfig={{ placement: 'bottom-end' }}
          overlay={
            <Popover id="popover-basic">
              <Popover.Title as="div"><h5>{info.fullname}</h5><p>{info.registeremail}</p></Popover.Title>
              <Popover.Content>
                <Button variant="danger" size="sm" onClick={handleLogout}>Logout</Button>
              </Popover.Content>
            </Popover>
          }
        >
          <Image src={DefaultProfileImg} roundedCircle className="headerpic"/>
        </OverlayTrigger>
      </div>
    </div>
  );
}

export default Header;
