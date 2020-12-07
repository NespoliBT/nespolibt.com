import React from "react";
import { Link } from "react-router-dom";
import "../css/Index.min.css";
import io from "../assets/io.png";
function Index() {
  return (
    <div className="main">
      <div className="presentation">
        <h1>
          Nespoli <br /> Davide
        </h1>
        <p>Web Developer</p>
      </div>
      <div>
        <Link to="/contacts">
          <button className="contactMe">Contact Me</button>
        </Link>
      </div>
      <img className="io" src={io} alt="io" />
    </div>
  );
}

export default Index;
