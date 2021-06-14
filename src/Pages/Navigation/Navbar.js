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
        {/* <svg width="100px" height="40px">
          <path
            id="ViewModeSwitchPath"
            d="M47 .6c38.22.23 50.7 8.56 50.7 20.45 0 9.83-26.37 17.82-51.19 17.82S.6 32.16.6 22.33c0-9.52 20.13-19.07 52.14-19.07C74 3.26 98 9.35 98 21.75c0 11.57-23 18.16-51.12 18.16-19.74 0-41.69-5.19-41.69-17.55 0-5.85 7.14-9.81 16.84-13"
            fill="none"
            stroke="#231f20"
            stroke-linecap="round"
            stroke-linejoin="round"
            style={{ strokeDashoffset: "155.643", strokeDasharray: "448.496px, 458.496px" }}
          ></path>
        </svg>  */}
        <Button variant="outline-dark" onClick={clickHandler}>
          Skip
        </Button>
    </div>
  );
}

export default Navbar;
