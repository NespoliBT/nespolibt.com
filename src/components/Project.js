import React from "react";
import "../css/Project.min.css";

function Project(props) {
  return (
    <div className="project">
      <div className="sidebar">
        {props.projectImg && (
          <img src={props.projectImg} alt="projectImg" className="projectImg" />
        )}
      </div>
      <div className="content">
        <p className="title">{props.title}</p>
        <p className="description">{props.description}</p>
        <p className="version box">
          Version: <span className="versionNumber">{props.version}</span>
        </p>

        <a href={props.repository} target="_blank" rel="noopener noreferrer">
          <div className="gitHub box">GitHub</div>
        </a>
        <div className="techsContainer">
          {props.techs.map((tech) => (
            <p key={tech} className={tech + " tech"}>
              {tech}
            </p>
          ))}
          {/* TODO magari al posto delle img dei mini box colorati con il nome della tech */}
        </div>
      </div>
    </div>
  );
}

export default Project;
