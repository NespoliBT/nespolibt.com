import React from "react";
import "../css/Project.min.css";
import html from "../assets/icons/html.png";
import sass from "../assets/icons/sass.png";
import react from "../assets/icons/react.png";

function Project(props) {
  return (
    <div className="project">
      <div className="content">
        <p className="title">NespoliBT.com</p>
        <p className="description">NespoliBT.com è il mio sito web</p>
      </div>
      <div className="sidebar">
        <p className="version box">
          Version: <span className="versionNumber">5.2.0</span>
        </p>
        <div className="techsContainer">
          <p className="techs">Tecnologie:</p>
          <div className="techImgs">
            <img src={html} alt="html" />
            <img src={sass} alt="sass" />
            <img src={react} alt="react" />
            {/* TODO magari al posto delle img dei mini box colorati con il nome della tech */}
          </div>
        </div>
        <a
          href="https://github.com/NespoliBT/nespolibt.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="gitHub box">GitHub</div>
        </a>
      </div>
    </div>
  );
}

export default Project;
