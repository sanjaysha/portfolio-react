import React from "react";
import footer_logo from "../../assets/logo.svg";
import { MdOutlineCopyright, MdOutlinePerson } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="
        flex flex-col gap-10
        px-4 sm:px-8 md:px-16 lg:px-32
        py-14
        text-gray-300
      "
    >
      {/* TOP SECTION */}
      <div className="flex justify-between items-start flex-wrap gap-10">
        {/* Left */}
        <div className="max-w-md">
          <img
            src={footer_logo}
            alt="logo"
            className="h-20 w-20 rounded-full"
          />
          <p className="mt-6 text-lg leading-relaxed">
            Delivering modern, elegant and high-performance web solutions.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-6">
          {/* Email Input */}
          <div
            className="
              flex items-center gap-4
              bg-[#32323b]
              rounded-full
              py-3 px-6
              cursor-pointer
              hover:border hover:border-white
              w-full sm:w-auto
            "
          >
            <MdOutlinePerson className="text-2xl" />

            <input
              type="email"
              placeholder="Enter your email"
              className="
                bg-transparent
                text-gray-300
                text-lg
                outline-none border-none
                w-full sm:w-56
              "
            />
          </div>

          {/* Subscribe Button */}
          <button
            className="
              text-lg
              w-full md:w-40
              py-3 px-10
              rounded-full cursor-pointer
              bg-gradient-to-r from-[#df8908] to-[#b415ff]
              transition-transform duration-300 
              hover:scale-105
              whitespace-nowrap
            "
          >
            Subscribe
          </button>
        </div>
      </div>

      <hr className="border-gray-600" />

      {/* BOTTOM SECTION */}
      <div
        className="
          flex justify-between items-center 
          flex-wrap gap-6 text-base sm:text-lg
        "
      >
        <div className="flex align-center items-center text-gray-400">
          <MdOutlineCopyright />
          <p> 2025 Sanjay Singh Shahi. All rights reserved</p>
        </div>

        <div className="flex gap-10 sm:gap-14 text-gray-300">
          <p className="cursor-pointer hover:text-white">Terms of Service</p>
          <p className="cursor-pointer hover:text-white">Privacy Policy</p>
          <p className="cursor-pointer hover:text-white">Connect with me</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
