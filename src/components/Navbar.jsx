import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav name="Navbar" className="fixed top-0 left-0 py-2 px-2 flex w-full backdrop-blur-md items-center justify-between">
      <img src={logo} className="ml-4 w-40" alt="Logo" />
      <ul className="flex justify-between text-lg pr-8 sm:space-x-4 md:space-x-6 lg:space-x-12 text-slate-300">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Skills</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
