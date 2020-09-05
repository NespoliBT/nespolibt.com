import React from "react";
import Project from "../components/Project";
import "../css/Projects.min.css";

function Projects() {
  //TODO Rivedere sto metodo fa cagare
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projectsContainer">
        <Project />
      </div>
    </div>
  );
}

export default Projects;
