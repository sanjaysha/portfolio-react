import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/theme_pattern.svg";
import { Link } from "react-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />

      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />

        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setMenu("home")}
          >
            <p>Home</p>
          </Link>
          {menu === "home" && <img src={underline} alt="" />}
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setMenu("about")}
          >
            <p>About Me</p>
          </Link>
          {menu === "about" && <img src={underline} alt="" />}
        </li>

        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setMenu("projects")}
          >
            <p>Portfolio</p>
          </Link>
          {menu === "projects" && <img src={underline} alt="" />}
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-50}
            onClick={() => setMenu("contact")}
          >
            <p>Contact</p>
          </Link>
          {menu === "contact" && <img src={underline} alt="" />}
        </li>
      </ul>

      <Link to="contact" smooth={true} duration={500} offset={-50}>
        <div className="nav-connect">Connect With Me</div>
      </Link>
    </div>
  );
};

export default Navbar;
