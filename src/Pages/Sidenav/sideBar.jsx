import React, { useEffect, useState } from "react";
import { SidebarAdminData } from "./sideBarData";
import { SidebarTLData } from "./sideBarData";
import { SidebarEmpData } from "./sideBarData";
import "./sideBarStyle.scss";
import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function SideBar({ collapse, setCollapse }) {
  const [data, setData] = useState();
  const currentUser = useSelector((state) => state.users);
  useEffect(() => {
    // const temp = JSON.parse(localStorage.getItem('LoginData'));
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
  }, []);
  return (
    <>
      {collapse ? (
        <div className="sidebarwrapper">
          <div className="sidebarheader">
            <AiOutlineAlignLeft onClick={setCollapse} />
          </div>
          {data &&
            data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink
                    className="linkWrapper"
                    activeStyle={{ backgroundColor: "#13223b" }}
                    to={item.path}
                  >
                    <span className="sideBarIcon">{item.icon}</span>
                  </NavLink>
                </li>
              );
            })}
        </div>
      ) : (
        <div className="sidebarwrapper">
          <div className="sidebarheader">
            <h3>NeoSOFT</h3>
            <AiOutlineAlignRight onClick={setCollapse} />
          </div>
          {data &&
            data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink
                    className="linkWrapper"
                    activeStyle={{ backgroundColor: "#294463" }}
                    to={item.path}
                  >
                    <span className="sideBarIcon">{item.icon}</span>
                    <span className="sideBarTitle">{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
        </div>
      )}
    </>
  );
}

export default SideBar;
