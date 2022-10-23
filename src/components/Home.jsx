import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="space-y-6 max-w-4xl">
        <h4 className="text-xl -mb-6 text-pink-400">Hello World, my name is</h4>
        <h1 className="text-6xl font-bold text-[#ccd6f6]">Ananyobrata Pal</h1>
        <h1 className="text-6xl font-bold text-[#9b7c58]">I'm a Full Stack Developer.</h1>
        <h4 className="text-xl text-[#9b7c58]">
          I am a full stack developer specializing in building and designing
          full featured web and mobile apps. An ardent linux lover, I also am a
          competitive programmer.
        </h4>
        <button className="px-4 py-2 border border-[#ccd6f6] text-[#ccd6f6]">Resume</button>
      </div>
    </div>
  );
};

export default Home;
