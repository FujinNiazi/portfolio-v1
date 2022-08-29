import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../Projects/ProjectList";
import "./index.scss";
import { Link } from "react-router-dom";
import Loader from "react-loaders";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {/* <GitHubIcon /> */}
      <Link to='/projects' className='flat-button3'>BACK TO THE PROJECTS PAGE</Link>
      <div className='space2'>
      P
    </div>
    </div>
  );
}

export default ProjectDisplay;
