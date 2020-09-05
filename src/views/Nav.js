import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.min.css";

function Index() {
  return (
    <div>
      <div className="mobileLogo">
        <Link to="/">NespoliBT.com</Link>
      </div>
      <div className="nav">
        <div className="logo">
          <Link to="/">NespoliBT.com</Link>
        </div>
        <ul>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Index;
