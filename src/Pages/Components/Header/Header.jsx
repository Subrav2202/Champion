import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import {OverlayTrigger,Popover,Image} from "react-bootstrap"
import "./Header.scss"
import DefaultProfileImg from "../../../Assets/profile.jpeg"
import { useSelector } from "react-redux";
import {baseUrl} from "../../constant"


function Header(props) {
  // const data = localStorage.getItem("user");
  // const info = JSON.parse(data);
  const currentUser = useSelector((state) => state.users);
let userrole=currentUser.role.replace(/_/g," ").toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
    let source=`${baseUrl}/user/${currentUser.avatar}`
  console.log(source)
  console.log(currentUser)
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("LoginData");
    history.push("/register");
  };

  return (
    <div className="header px-4">
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
          <Image src={source?source:DefaultProfileImg} roundedCircle className="headerpic"/>
        </OverlayTrigger>
        </div>
    </div>
  );
}

export default Header;
