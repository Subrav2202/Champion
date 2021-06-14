import React, { useEffect, useState } from "react";
import { SidebarAdminData } from "./sideBarData";
import { SidebarTLData } from "./sideBarData";
import { SidebarEmpData } from "./sideBarData";
import "./sideBarStyle.scss";
import { FaRegWindowClose } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function SideBar({ collapse, setCollapse }) {
  const [roleData, setRoleData] = useState()
  const [data,setData] = useState()
  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem('LoginData'));
    setRoleData(temp.role)
    if (temp.role === "Admin") {
      setData(SidebarAdminData)
    }
    else if (temp.role === "TL") {
      setData(SidebarTLData)
    }
    else if (temp.role === "Employee") {
      setData(SidebarEmpData)
    }


  })
  return (
    <>
      {
        collapse ?
          <div className="sidebarwrapper">
            <div className="sidebarheader">
              <AiOutlineMenu onClick={setCollapse} />
            </div>
            {data && data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink className="linkWrapper" activeStyle={{ backgroundColor: "#13223b" }} to={item.path}>
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
              <FaRegWindowClose onClick={setCollapse} />
            </div>
            {data && data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink className="linkWrapper" activeStyle={{ backgroundColor: "#294463" }} to={item.path}>
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
