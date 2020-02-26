import React from "react";
import "../css/Nav.min.css";

function Index() {
  return (
    <div className="nav">
      <a href="#" className="logo">
        NespoliBT.com
      </a>
      <ul>
        <a href="#">
          <li>Blog</li>
        </a>
        <a href="#">
          <li>Progetti</li>
        </a>
        <a href="#">
          <li>Portfolio</li>
        </a>
      </ul>
    </div>
  );
}

export default Index;
