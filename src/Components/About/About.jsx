import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <section
      name="about"
      className="px-6 md:px-12 lg:px-24 py-16 flex flex-col items-center gap-12"
    >
      {/* Title */}
      <div className="relative">
        <h1 className="text-4xl md:text-3xl font-semibold">About</h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute -bottom-2 -right-6 w-20 md:w-14 opacity-70 -z-10"
        />
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl w-full">
        {/* Image (Hidden on small screens for cleaner layout) */}
        <div className="hidden md:flex justify-center">
          <img
            src={profile_img}
            alt="profile"
            className="w-64 h-64 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-10">
          {/* Description */}
          <div className="text-lg md:text-xl font-medium leading-7 md:leading-8 opacity-90 flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              consectetur accusantium amet blanditiis necessitatibus asperiores
              ex voluptates nulla harum quibusdam.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              perferendis.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-6">
            {[
              { label: "HTML & CSS", width: "w-1/2" },
              { label: "React JS", width: "w-[70%]" },
              { label: "Vue JS", width: "w-[60%]" },
              { label: "Javascript", width: "w-[50%]" },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-6 hover:scale-[1.03] transition-transform"
              >
                <p className="min-w-[130px] text-xl md:text-lg font-medium">
                  {skill.label}
                </p>
                <div
                  className={`h-2 rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] ${skill.width}`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="flex flex-wrap justify-center md:justify-between gap-10 w-full max-w-5xl mt-10">
        {[
          { value: "4+", label: "YEARS OF EXPERIENCE" },
          { value: "30+", label: "PROJECTS COMPLETED" },
          { value: "20+", label: "HAPPY CLIENTS" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 hover:scale-105 transition"
          >
            <h1 className="text-5xl md:text-4xl font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
              {item.value}
            </h1>
            <p className="text-xl md:text-base text-center font-medium opacity-90 w-40">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
