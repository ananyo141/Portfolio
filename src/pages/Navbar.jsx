import React from "react";

import logo from "../assets/logo.png";
import Navsidebar from "../components/Navsidebar";

import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  // return (
  //   <nav
  //     name="Navbar"
  //     className="fixed top-0 left-0 z-50 flex w-full items-center justify-between py-2 px-2 backdrop-blur-md"
  //   >
  //     <img src={logo} className="ml-4 w-40" alt="Logo" />
  //     <ul className="flex justify-between pr-8 text-lg text-slate-300 sm:space-x-4 md:space-x-6 lg:space-x-12">
  //       <Link activeClass="active" to="Home" smooth={true} duration={500}>
  //         <li className="cursor-pointer">Home</li>
  //       </Link>
  //       <Link activeClass="active" to="About" smooth={true} duration={500}>
  //         <li className="cursor-pointer">About</li>
  //       </Link>
  //       <Link activeClass="active" to="Skills" smooth={true} duration={500}>
  //         <li className="cursor-pointer">Skills</li>
  //       </Link>
  //       <Link activeClass="active" to="Experience" smooth={true} duration={500}>
  //         <li className="cursor-pointer">Experience</li>
  //       </Link>
  //       <Link activeClass="active" to="Projects" smooth={true} duration={500}>
  //         <li className="cursor-pointer">Projects</li>
  //       </Link>
  //       <Link
  //         activeClass="active"
  //         to="Testimonials"
  //         smooth={true}
  //         duration={500}
  //       >
  //         <li className="cursor-pointer">Testimonials</li>
  //       </Link>
  //       <Link activeClass="active" to="Contact" smooth={true} duration={500}>
  //         <li className="cursor-pointer">Contact</li>
  //       </Link>
  //     </ul>
  //   </nav>
  return (
    <nav className="fixed top-0 left-0 bottom-0 w-[300px] bg-white">
      <RxHamburgerMenu className="float-right mr-4 mt-6 scale-150 cursor-pointer" />
      <Navsidebar />
    </nav>
  );
};

export default Navbar;
