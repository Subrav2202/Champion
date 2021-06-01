import React  from "react";
import { SidebarData } from "./sideBarData";
import "./sideBarStyle.scss";
import {FaRegWindowClose}from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function SideBar({collapse,setCollapse}) {
  return (
    <>
    {
      collapse?
      <div className="sidebarwrapper">
      <div className="sidebarheader">
        <AiOutlineMenu onClick={setCollapse}/>
      </div>
      {SidebarData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <NavLink className="linkWrapper" activeStyle={{backgroundColor:"#13223b"}}  to={item.path}>
              <span className="sideBarIcon">{item.icon}</span>
            </NavLink>
          </li>
        );
      })}
    </div>
    :
    <div className="sidebarwrapper">
      <div className="sidebarheader">
        <h3>NeoSOFT</h3>
        <FaRegWindowClose onClick={setCollapse}/>
      </div>
      {SidebarData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
            <NavLink className="linkWrapper" activeStyle={{backgroundColor:"#13223b"}} to={item.path}>
              <span className="sideBarIcon">{item.icon}</span>
              <span className="sideBarTitle">{item.title}</span>
            </NavLink>
          </li>
        );
      })}
    </div>
}
    </>
  );
}

export default SideBar;
