import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.min.css";

function Index() {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">NespoliBT.com</Link>
      </div>
      <ul>
        <Link to="/">
          <li>Blog</li>
        </Link>
        <Link to="/">
          <li>Progetti</li>
        </Link>
        <Link to="/">
          <li>Portfolio</li>
        </Link>
      </ul>
    </div>
  );
}

export default Index;
