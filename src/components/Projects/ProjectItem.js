import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      // onClick={() => {
      //   navigate("/project/" + id);
      // }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage">
      <div className="image-front">
        
      <div className="name"> {name} </div>
      <div >
      <button
      className="btn"
      onClick={() => {
      navigate("/project/" + id);
      }}
      >View</button>
      </div>
      </div>
      </div>
    </div>
  );
}

export default ProjectItem;
