import React from "react";
import { Router, Link, BrowserRouter } from "react-router-dom";
import "./Header.css";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="Welcome">
      <div className="Welcome-title">
        Welcome to Hilight! Use this tool prior to purchasing a cosmetics
        product to ensure that the brand does not conduct testing on animals!
      </div>
      <div className="welcomeImage"></div>
    </div>
  );
}

export default Welcome;
