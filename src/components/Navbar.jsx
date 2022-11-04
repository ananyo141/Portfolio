import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav
      name="Navbar"
      className="fixed top-0 z-50 left-0 py-2 px-2 flex w-full backdrop-blur-md items-center justify-between"
    >
      <img src={logo} className="ml-4 w-40" alt="Logo" />
      <ul className="flex justify-between text-lg pr-8 sm:space-x-4 md:space-x-6 lg:space-x-12 text-slate-300">
        <Link activeClass="active" to="Home" smooth={true} duration={500}>
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link activeClass="active" to="About" smooth={true} duration={500}>
          <li className="cursor-pointer">About</li>
        </Link>
        <Link activeClass="active" to="Skills" smooth={true} duration={500}>
          <li className="cursor-pointer">Skills</li>
        </Link>
        <Link activeClass="active" to="Experience" smooth={true} duration={500}>
          <li className="cursor-pointer">Experience</li>
        </Link>
        <li className="cursor-pointer">Projects</li>
        <Link
          activeClass="active"
          to="Testimonials"
          smooth={true}
          duration={500}
        >
          <li className="cursor-pointer">Testimonials</li>
        </Link>
        <Link activeClass="active" to="Contact" smooth={true} duration={500}>
          <li className="cursor-pointer">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
