import React, { useState } from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "909a5cf4-82c9-4875-8370-775d15a491b4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div
      name="contact"
      className="
        flex flex-col items-center
        px-4 sm:px-8 md:px-16 lg:px-32
        py-12 md:py-16
        gap-12
      "
    >
      {/* Title */}
      <div className="relative">
        <h1 className="text-3xl sm:text-4xl font-semibold">Get in touch</h1>
        <img
          src={theme_pattern}
          alt=""
          className="absolute -bottom-2 right-1/2 translate-x-1/2 -z-10 w-20 sm:w-28 md:w-32"
        />
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 w-full">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-8 max-w-xl">
          <h1
            className="
              text-2xl sm:text-3xl md:text-4xl font-extrabold 
              bg-gradient-to-r from-[#df8908] to-[#b415ff] 
              bg-clip-text text-transparent
            "
          >
            Let’s Talk
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Ready to bring my skills to a forward-thinking product team. If
            you're hiring, I’d love to hear from you.
          </p>

          {/* CONTACT DETAILS */}
          <div className="flex flex-col gap-6 text-gray-300 text-lg">
            <div className="flex items-center gap-4">
              <MdEmail />
              <p>shahi.sanjayshahi@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <MdCall />
              <p>+91 8650460318</p>
            </div>

            <div className="flex items-center gap-4">
              {/* <img src={location_icon} className="h-7" alt="" /> */}
              <MdLocationOn />
              <p>Bhubneshwar, India</p>
            </div>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-6 w-full max-w-2xl"
        >
          <div>
            <label className="text-gray-300 text-lg font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="
                w-full h-12 mt-2 px-4 rounded 
                bg-[#32323c] text-gray-300 text-lg 
                outline-none focus:ring-2 focus:ring-[#b415ff]
              "
            />
          </div>

          <div>
            <label className="text-gray-300 text-lg font-medium">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="
                w-full h-12 mt-2 px-4 rounded
                bg-[#32323c] text-gray-300 text-lg 
                outline-none focus:ring-2 focus:ring-[#b415ff]
              "
            />
          </div>

          <div>
            <label className="text-gray-300 text-lg font-medium">
              Write your message here
            </label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              className="
                w-full mt-2 p-4 rounded
                bg-[#32323c] text-gray-300 text-lg 
                outline-none focus:ring-2 focus:ring-[#b415ff]
              "
            ></textarea>
          </div>

          <button
            type="submit"
            className="
              mt-2 text-lg
              py-3 px-10
              rounded-full cursor-pointer
              bg-gradient-to-r from-[#df8908] to-[#b415ff]
              transition-transform duration-300 
              hover:scale-105
              whitespace-nowrap
            "
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
