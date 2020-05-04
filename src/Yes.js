import React from "react";
import { Router, Link, BrowserRouter } from "react-router-dom";
import "./Header.css";
import "./Answer.css";

function Yes() {
  return (
    <div className="answer">
      <div className="Yes-title">CRUELTY-FREE! BUY AWAY!</div>
      <div className="bunny"></div>
    </div>
  );
}

export default Yes;
