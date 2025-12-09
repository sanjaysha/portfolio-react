import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.png";

const About = () => {
  return (
    <section
      name="about"
      className="px-6 md:px-12 lg:px-32 py-10 flex flex-col items-center gap-12"
    >
      <div className="relative">
        <h1 className="text-3xl sm:text-4xl font-semibold">About</h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute -bottom-2 right-1/2 translate-x-1/2 -z-10 w-20 sm:w-28 md:w-32"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start max-w-6xl w-full">
        <div className="hidden md:flex justify-center flex flex-col gap-10">
          <img
            src={profile_img}
            alt="profile"
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
          <div className="flex flex-wrap justify-center gap-10 w-full max-w-5xl mt-10">
            {[
              { value: "4+", label: "YEARS OF EXPERIENCE" },
              // { value: "30+", label: "PROJECTS COMPLETED" },
              // { value: "20+", label: "HAPPY CLIENTS" },
            ].map((item, index, arr) => (
              <div key={index} className="flex items-center gap-10">
                <div className="flex flex-col items-center gap-3 hover:scale-105 transition">
                  <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
                    {item.value}
                  </h1>
                  <p className="text-base sm:text-sm md:text-base text-center font-medium opacity-90 leading-snug">
                    {item.label}
                  </p>
                </div>

                {index !== arr.length - 1 && (
                  <div className="hidden sm:block h-20 w-[2px] bg-gray-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="text-lg md:text-xl leading-7 md:leading-8 opacity-90 flex flex-col gap-5">
            <p>
              A dedicated frontend web developer with a solid foundation in
              Vue.js, React, and the MERN stack. I've crafted engaging web
              applications that enhance user experience and drive business
              success. My journey began after graduating with a B.Tech in
              Electronics and Communication from Graphic Era Hill University,
              where I not only honed my tech skills but also developed a keen
              understanding of result-oriented solutions. I've tackled projects
              across various domains like e-commerce, real estate, and customer
              management, enhancing features that improve functionality and user
              interaction. My role at Trigital Technologies in developing the
              Teka Web App and managing high-traffic admin panels like Nipige
              spotlighted my ability to handle complex features efficiently.
            </p>
            <p>
              Thrive in settings that challenge my tech abilities and allow
              collaborative problem solving. Always a team player, I bring
              dedication and a constant hunger to learn and grow within the tech
              sphere. Let's connect to explore how I can bring value to your
              next project or perhaps just share insights into the ever-evolving
              tech world!
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full">
            {[
              { label: "HTML & CSS", width: "w-[95%] sm:w-[90%] md:w-[80%]" },
              { label: "Javascript", width: "w-[93%] sm:w-[88%] md:w-[78%]" },
              { label: "Vue JS", width: "w-[92%] sm:w-[86%] md:w-[75%]" },
              { label: "React JS", width: "w-[92%] sm:w-[86%] md:w-[75%]" },
              { label: "Tailwind", width: "w-[94%] sm:w-[88%] md:w-[77%]" },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4 w-full hover:scale-[1.03] transition-transform"
              >
                <p className="text-base sm:text-lg font-medium w-28 sm:w-36 md:w-40">
                  {skill.label}
                </p>

                <div className="flex-1">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] ${skill.width}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
