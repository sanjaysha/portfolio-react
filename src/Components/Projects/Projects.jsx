import React from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import myprojects_data from "../../assets/projects_data";
import right_arrow_icon from "../../assets/right_arrow_icon.svg";

const Projects = () => {
  return (
    <div name="projects" className="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-container">
        {myprojects_data.map((project, index) => {
          return <img key={index} src={project.p_img} alt="" />;
        })}
      </div>
      <div className="projects-showmore">
        <p>Show More</p>
        <img src={right_arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Projects;
