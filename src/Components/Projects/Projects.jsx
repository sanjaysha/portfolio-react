import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import myprojects_data from "../../data/projects";
import right_arrow_icon from "../../assets/right_arrow_icon.svg";

const Projects = () => {
  return (
    <div
      name="projects"
      className="
        flex flex-col items-center justify-center 
        px-4 py-10 
        sm:px-8 md:px-20 lg:px-32 
        gap-12
      "
    >
      {/* Title */}
      <div className="relative text-center w-full">
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
        {myprojects_data.map((project, index) => (
          <div
            key={index}
            className="
              w-full overflow-hidden rounded-xl 
              cursor-pointer group
            "
          >
            <img
              src={project.p_img}
              alt=""
              className="
                w-full h-56 sm:h-64 md:h-72 object-cover 
                rounded-xl transition-transform duration-300
                group-hover:scale-110 group-hover:border-4 group-hover:border-[#ff00ff]
              "
            />
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div
        className="
          flex items-center justify-center 
          gap-3 border-2 border-white rounded-full 
          px-8 py-3 
          text-lg sm:text-xl font-medium cursor-pointer
          transition-all duration-500
          hover:gap-6 mt-6
        "
      >
        <p>Show More</p>
        <img src={right_arrow_icon} alt="" className="h-8 sm:h-10" />
      </div>
    </div>
  );
};

export default Projects;
