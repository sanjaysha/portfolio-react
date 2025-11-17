import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="home" className="hero">
      <img src={profile_img} alt="profile" />

      <h1>
        <span>I'm Sanjay Singh Shahi,</span> frontend developer based in India.
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
        facilis est voluptatem repellendus ullam dolores dicta nobis corporis
        sed neque fugit esse id pariatur praesentium explicabo voluptatibus,
        atque nisi dolor fugiat voluptatum magni beatae molestiae! Adipisci vero
        provident officia explicabo labore sequi facere exercitationem?
        Necessitatibus et in asperiores numquam temporibus!
      </p>

      <div className="hero-action">
        {/* Smooth Scroll Button */}
        <div className="hero-connect">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            className="anchor-link"
          >
            Connect with me
          </Link>
        </div>

        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
