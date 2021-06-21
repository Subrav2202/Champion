import React from "react";
import { Button, OverlayTrigger,Popover } from "react-bootstrap";
import { useHistory } from "react-router";
import './headerStyle.scss'

function Header(props) {
    const history = useHistory();
    const handleLogout = () => {
        // localStorage.removeItem("LoginData");
        // history.push("/register");
    };
    return (
        <div className="header px-4">
            <h4>{props.title}</h4>
            <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={
                    <Popover id="popover-positioned-bottom">
                        <Popover.Title as="h3">Title</Popover.Title>
                        <Popover.Content>
                            <strong>Holy guacamole!</strong> Check this info.
                        </Popover.Content>
                    </Popover>
                }
            >
                <Button variant="danger" onClick={handleLogout}>
                    Logout
                </Button>
            </OverlayTrigger>
        </div>
    );
}

export default Header;
