import React from "react";
import profile_img from "../../assets/profile_img.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      name="home"
      className="flex flex-col items-center text-center px-6 md:px-10 lg:px-20 gap-6 md:gap-10"
    >
      {/* Profile Image */}
      <img
        src={profile_img}
        alt="profile"
        className="mt-10 h-40 w-40 md:h-56 md:w-56 rounded-full object-cover shadow-lg"
      />

      {/* Heading */}
      <h1 className="max-w-3xl text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
        <span className="bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
          I'm Sanjay Singh Shahi,
        </span>{" "}
        frontend developer based in India.
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-lg md:text-xl leading-7 md:leading-8 opacity-90">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
        facilis est voluptatem repellendus ullam dolores dicta nobis corporis
        sed neque fugit esse id pariatur praesentium explicabo voluptatibus,
        atque nisi dolor fugiat voluptatum magni beatae molestiae! Adipisci vero
        provident officia explicabo labore sequi facere exercitationem?
        Necessitatibus et in asperiores numquam temporibus!
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4 md:gap-6 text-lg md:text-xl font-medium mb-10">
        {/* Connect Button */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-50}
          className="px-6 md:px-8 py-3 rounded-full cursor-pointer bg-gradient-to-r from-[#df8908] to-[#b415ff] hover:opacity-90 transition"
        >
          Connect with me
        </Link>

        {/* Resume Button */}
        <a
          href="#"
          className="px-8 md:px-10 py-3 rounded-full cursor-pointer border-2 border-white hover:border-[#b415ff] transition"
        >
          My Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
