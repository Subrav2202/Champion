import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./navStyle.scss";

function Navbar() {
  const history = useHistory()
  const clickHandler = () => {
    history.push("/register")
  };
  return (
    <div className="navigation">
      <h1>Neo<span className="brand-style">SOFT</span></h1>
        <Button variant="outline-dark" onClick={clickHandler}>
          Skip
        </Button>
    </div>
  );
}

export default Navbar;
