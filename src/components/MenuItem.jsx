import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const MenuItem = ({ icon, title, linkname }) => {
  const menuVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };
  return (
    <motion.li
      variants={menuVariants}
      className="mb-5 flex cursor-pointer items-center space-x-6"
    >
      <span className="h-[45px] w-[45px] rounded-full border-2 border-blue-300"></span>
      <Link
        className="h-8 flex-1 rounded-lg border-2 border-blue-400 px-4"
        activeClass="active"
        to={linkname}
        smooth={true}
        duration={500}
      >
        <span className="uppercase">{title}</span>
      </Link>
    </motion.li>
  );
};

export default MenuItem;
