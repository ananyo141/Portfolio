import React, { useState } from "react";

import logo from "../assets/logo.png";
import MenuItem from "../components/MenuItem";

import { Link } from "react-scroll";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navtopbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 hidden w-full items-center justify-between py-2 px-2 backdrop-blur-md md:flex">
      <img src={logo} className="ml-4 w-40" alt="Logo" />
      <ul className="flex justify-between pr-8 text-lg text-slate-300 sm:space-x-4 md:space-x-6 lg:space-x-12">
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
        <Link activeClass="active" to="Projects" smooth={true} duration={500}>
          <li className="cursor-pointer">Projects</li>
        </Link>
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

// https://www.youtube.com/watch?v=qppZVzJB8oA
const Navsidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <RxHamburgerMenu
        className="-ml-3 mt-2 scale-150 text-white cursor-pointer md:hidden"
        onClick={toggleMenu}
      />
      {isOpen ? (
        <nav className="fixed top-0 left-0 bottom-0 w-[300px] bg-white md:hidden">
          <RxCross1
            className="ml-7 mt-6 scale-150 cursor-pointer"
            onClick={toggleMenu}
          />
          <ul className="fixed top-[100px] w-[260px] p-5">
            {[...Array(5)].map((_, i) => (
              <MenuItem key={i} />
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  );
};

const Navbar = () => {
  return (
    <section name="Navbar">
      <Navsidebar />
      <Navtopbar />
    </section>
  );
};

export default Navbar;
