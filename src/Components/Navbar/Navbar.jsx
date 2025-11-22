import React, { useRef, useState } from "react";
import logo from "../../assets/logo.svg";
import underline from "../../assets/theme_pattern.svg";
import { Link } from "react-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px";
    setMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-100%";
    setMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "projects", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 md:px-20 lg:px-44 py-4 relative">
      {/* Logo */}
      <img src={logo} alt="logo" className="h-12 w-auto rounded-2xl" />

      {/* =============== MOBILE MENU BUTTON =============== */}
      {!menuOpen && (
        <img
          src={menu_open}
          onClick={openMenu}
          alt="open menu"
          className="
      block md:hidden h-8 w-8 
      fixed top-4 right-6 z-30 cursor-pointer
    "
        />
      )}

      {/* =============== DESKTOP MENU (Centered) =============== */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex items-center gap-12 text-lg">
          {navItems.map((item) => (
            <li key={item.id} className="flex flex-col gap-1 cursor-pointer">
              <Link
                to={item.id}
                smooth
                duration={500}
                offset={-50}
                onClick={() => setMenu(item.id)}
                className="text-white text-[18px]"
              >
                {item.label}
              </Link>

              {menu === item.id && (
                <img src={underline} alt="" className="mx-auto w-20 md:w-24" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* =============== MOBILE SIDEBAR MENU =============== */}
      <ul
        ref={menuRef}
        className="
      fixed top-0 right-[-100%] h-full w-64 bg-[#1f0016]
      flex flex-col items-start gap-6 px-8 pt-24 z-20
      transition-all duration-500 md:hidden
    "
      >
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="close menu"
          className="h-8 w-8 absolute top-6 right-6 cursor-pointer"
        />

        {navItems.map((item) => (
          <li key={item.id} className="cursor-pointer">
            <Link
              to={item.id}
              smooth
              duration={500}
              offset={-50}
              onClick={() => {
                setMenu(item.id);
                closeMenu();
              }}
              className="text-white text-xl"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Connect button (Desktop only) */}
      <Link to="contact" smooth duration={500} offset={-50}>
        <button
          className="
        hidden md:block 
        px-6 py-2 rounded-full text-lg font-medium 
        bg-gradient-to-r from-[#da7c25] to-[#b923e1]
        transition-transform duration-300 hover:scale-105
      "
        >
          Connect With Me
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
