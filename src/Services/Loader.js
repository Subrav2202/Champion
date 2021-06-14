import React, { Component } from "react";
import "./loaderStyle.scss";


function Loaders() {
    return (
        <div className="loader-wrapper">
            <div className="loader"></div>
            <div>loading...</div>
        </div>
    );
}

export default Loaders;
