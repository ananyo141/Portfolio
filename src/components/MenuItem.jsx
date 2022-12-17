import React from "react";
import { Link } from "react-scroll";

const MenuItem = ({ icon, title, linkname }) => {
  return (
    <li className="mb-5 flex cursor-pointer items-center space-x-6">
      <span className="h-[45px] w-[45px] rounded-full border-2 border-blue-300"></span>
      <Link className="h-8 flex-1 rounded-lg border-2 border-blue-400 px-4" activeClass="active" to={linkname} smooth={true} duration={500}>
        <span className="uppercase">
          {title}
        </span>
      </Link>
    </li>
  );
};

export default MenuItem;
