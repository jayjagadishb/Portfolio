import React from "react";
import logo from "../assets/jjblogo.png";
import { FaLinkedin, FaFileAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import resume from "../assets/resume.pdf";

function Navbar() {
  return (
    <nav className=" mb-[-0.1rem] flex  justify-between items-center   lg:px-8 mt-[-1.2rem]">
      <div className="flex  items-center ">
        <img className="ml-[-3rem] mr-[6rem] pw-30" src={logo} alt="logo" />
      </div>
      <div className="ml-6 flex items-center  gap-6 text-2xl">
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <FaFileAlt />
        </a>
        <a
          href="https://www.linkedin.com/in/jay-jagadish-behera/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/jayjagadishb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/beherajayjagadish?igsh=MTI4cThsdWszM25i"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
