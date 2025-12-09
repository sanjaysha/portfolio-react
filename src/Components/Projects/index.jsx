import React, { useState } from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import myprojects_data from "../../data/projects";
import { MdEast } from "react-icons/md";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6); // show first 6

  const handleShowMore = () => {
    if (visibleProjects >= myprojects_data.length) {
      // if all are visible → reset to first 6
      setVisibleProjects(6);
    } else {
      // else show +6 more
      setVisibleProjects((prev) => prev + 6);
    }
  };

  const isAllProjectsShown = visibleProjects >= myprojects_data.length;

  return (
    <div
      name="projects"
      className="
        flex flex-col items-center justify-center 
        px-6 py-10 
        sm:px-8 md:px-32
        gap-12
      "
    >
      {/* Title */}
      <div className="relative">
        <h1 className="text-3xl sm:text-4xl font-semibold">My Projects</h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute -bottom-2 right-1/2 translate-x-1/2 -z-10 w-20 sm:w-28 md:w-32"
        />
      </div>

      {/* Projects Grid */}
      <div
        className="
          grid 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-6 sm:gap-8 lg:gap-10 
          w-full
        "
      >
        {myprojects_data.slice(0, visibleProjects).map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <div
              className="
                w-full overflow-hidden rounded-xl 
                cursor-pointer group relative
              "
            >
              <img
                src={project.p_img}
                alt={project.title || "project"}
                className="
                  w-full h-56 sm:h-64 md:h-72 object-cover 
                  rounded-xl transition-transform duration-300
                  group-hover:scale-110 group-hover:border-4 group-hover:border-[#ff00ff]
                "
              />

              <div
                className="
                  p-3 absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-92
                  flex flex-col justify-center items-center text-white transition duration-300
                "
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <h5 className="text-sm mt-2">{project.subtitle}</h5>
                <p className="text-sm text-center mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Show More / Show Less */}
      {myprojects_data.length > 6 && (
        <button
          onClick={handleShowMore}
          className="
            flex items-center justify-center 
            gap-4 border-2 border-white rounded-full 
            px-8 py-3 
            text-lg sm:text-xl font-medium cursor-pointer
            transition-all duration-500
            hover:gap-7 mt-6
          "
        >
          <p>{isAllProjectsShown ? "Show Less" : "Show More"}</p>
          <MdEast />
        </button>
      )}
    </div>
  );
};

export default Projects;
