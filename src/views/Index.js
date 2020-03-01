import React from "react";
import "../css/Index.min.css";
import io from "../assets/io.gif";
function Index() {
  return (
    <div className="main">
      <div className="presentation">
        <h1>
          Nespoli <br /> Davide
        </h1>
        <p>Web Developer</p>
      </div>
      <img src={io} alt="io" className="io" />
    </div>
  );
}

export default Index;
