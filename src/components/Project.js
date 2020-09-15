import React from "react";
import "../css/Project.min.css";

function Project(props) {
  return (
    <div className="project">
      <div className="content">
        <p className="title">{props.title}</p>
        <p className="description">{props.description}</p>
      </div>
      <div className="sidebar">
        <p className="version box">
          Version: <span className="versionNumber">{props.version}</span>
        </p>
        <div className="techsContainer">
          <p className="techs">Tecnologie:</p>
          <div className="techImgs">
            {props.techs.map((tech) => (
              <img key={tech} src={require("../assets/icons/" + tech + ".png")} alt={tech}/>
            ))}
            {/* TODO magari al posto delle img dei mini box colorati con il nome della tech */}
          </div>
        </div>
        <a
          href={props.repository}
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
