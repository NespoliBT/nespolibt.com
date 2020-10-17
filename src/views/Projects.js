import React from "react";
import Project from "../components/Project";
import "../css/Projects.min.css";
import nespolibt from "../assets/projectImgs/nespolibt.png";

function Projects() {
  //TODO Rivedere sto metodo fa cagare
  return (
    <div className="projects">
      <div className="projectsContainer">
        <Project
          title="NespoliBT.com"
          description="NespoliBT.com è il mio sito web"
          version="5.2.0"
          techs={["html", "sass", "react"]}
          repository="https://github.com/NespoliBT/nespolibt.com"
          projectImg={nespolibt}
        />
        <Project
          title="TrackerBT"
          description="Un semplice tracker di attività"
          version="1.2.0"
          techs={["html", "sass", "electron"]}
          repository="https://github.com/NespoliBT/TrackerBT"
        />
        <Project
          title="Note"
          description="Perchè stavo usando TrackerBT per le note ma non è fatto per quello"
          version="1.0.0"
          techs={["html", "sass", "electron"]}
          repository="https://github.com/NespoliBT/Note"
        />
      </div>
    </div>
  );
}

export default Projects;
