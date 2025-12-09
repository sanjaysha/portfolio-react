import React from "react";
import profile_img from "../../assets/profile_img.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      name="home"
      className="flex flex-col items-center text-center px-6 md:px-32 gap-6 md:gap-10"
    >
      <img
        src={profile_img}
        alt="profile"
        className="mt-10 h-40 w-40 md:h-56 md:w-56 rounded-full object-cover"
      />

      <h1 className="max-w-3xl text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
        <span className="bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
          I'm Sanjay Singh Shahi,
        </span>{" "}
        frontend developer based in India.
      </h1>

      <p className="max-w-2xl text-lg md:text-xl leading-7 md:leading-8 opacity-90">
        Delivering seamless front-end experiences with deep experience across
        Vue, React, UI libraries, and performance-focused architecture.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-lg md:text-xl font-medium mb-10">
        <a
          href="/Sanjay_Singh_Resume.pdf"
          target="_blank"
          className="px-6 md:px-8 py-3 rounded-full cursor-pointer bg-gradient-to-r from-[#df8908] to-[#b415ff] hover:opacity-90 transition"
        >
          View Resume
        </a>
        <a
          href="/Sanjay_Singh_Resume.pdf"
          download
          className="px-6 md:px-8 py-3 rounded-full cursor-pointer border-2 border-white hover:border-[#b415ff] transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
