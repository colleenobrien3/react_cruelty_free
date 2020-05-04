import React from "react";
import { Router, Link, BrowserRouter } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      {/* <div className="cracker"></div> */}
      <div className="title">HiLight</div>
      <BrowserRouter></BrowserRouter>
    </div>
  );
}

export default Header;
