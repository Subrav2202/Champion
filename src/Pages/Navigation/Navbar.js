import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./navstyle.scss";

function Navbar() {
  const history = useHistory()
  const clickHandler = () => {
    history.push("/register")
  };
  return (
    <div className="navigation">
      <h2>NeoSoft</h2>
      <Button variant="outline-dark" onClick={clickHandler}>
        Skip
      </Button>
    </div>
  );
}

export default Navbar;
