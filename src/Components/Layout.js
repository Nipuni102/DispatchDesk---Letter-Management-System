import React from "react";
import Sidebar from "./Sidebar";
import "../styles/App.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">{children}</div>
    </div>
  );
};

export default Layout;