import React from "react";
import { IoOpenOutline } from "react-icons/io5";

import resumepdf from "../assets/Resume.pdf";

const Home = () => {
  return (
    <div
      name="Home"
      className="flex items-center justify-center h-screen max-w-lg lg:max-w-full"
    >
      <div className="space-y-6 max-w-4xl">
        <h4 className="text-xl -mb-6 text-pink-400">Hello World, my name is</h4>
        <h1 className="text-6xl font-bold text-[#ccd6f6]">Ananyobrata Pal</h1>
        <h1 className="text-6xl font-bold text-[#9b7c58]">
          I'm a Full Stack Developer.
        </h1>
        <h4 className="text-xl text-[#9b7c58]">
          I am a full stack developer specializing in building and designing
          full featured web and mobile apps. An ardent linux lover, I also am a
          competitive programmer.
        </h4>
        <button className="px-4 py-2 rounded border border-[#ccd6f6] text-[#ccd6f6]">
          <a href={resumepdf} target="_blank" rel="noreferrer">
            Resume
            <IoOpenOutline className="ml-2 mb-1 inline" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
