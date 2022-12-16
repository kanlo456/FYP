import React, { Fragment } from "react";
import SidebarButton from "./SidebarButton";
import companyIcon from "../../assets/companyIcon1.png";
import classes from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <Fragment>
      <section>
        <div className={classes["top_logo"]}>
          <img src={companyIcon}></img>
          <h1>WSIG</h1>
        </div>
        <SidebarButton text="Hello"/>
        <SidebarButton text="Hello"/>
        <SidebarButton text="Hello"/>
      </section>
    </Fragment>
  );
};

export default Sidebar;
