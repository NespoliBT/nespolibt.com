import React from "react";
import Project from "../components/Project";
import "../css/Projects.min.css";
import nespolibt from "../assets/projectImgs/nespolibt.png";
import trackerbt from "../assets/projectImgs/trackerbt.png";
import note from "../assets/projectImgs/note.png";

function Projects() {
  //TODO Rivedere sto metodo fa cagare
  return (
    <div className="projects">
      <div className="projectsContainer">
        <Project
          title="NespoliBT.com"
          description="NespoliBT.com is my website/portfolio"
          version="5.2.0"
          techs={["html", "sass", "react"]}
          repository="https://github.com/NespoliBT/nespolibt.com"
          projectImg={nespolibt}
        />
        <Project
          title="TrackerBT"
          description="A simple activity tracker"
          version="1.2.0"
          techs={["html", "sass", "electron"]}
          repository="https://github.com/NespoliBT/TrackerBT"
          projectImg={trackerbt}
        />
        <Project
          title="Note"
          description="This was created becouse I was using TrackerBT to take notes and that's not what it's supposed to be used."
          version="1.0.0"
          techs={["html", "sass", "electron"]}
          repository="https://github.com/NespoliBT/Note"
          projectImg={note}
        />
      </div>
    </div>
  );
}

export default Projects;
