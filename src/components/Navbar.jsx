import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 flex w-full backdrop-blur-md items-center justify-between">
      <img src={logo} className="ml-2 w-48 h-28" alt="Logo" />
      <ul className="flex justify-between pr-8 sm:space-x-4 md:space-x-8 lg:space-x-12 text-slate-300">
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
