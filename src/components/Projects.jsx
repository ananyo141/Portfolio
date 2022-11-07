import React from "react";

const Projects = () => {
  return (
    <div
      name="Projects"
      className="flex flex-col md:flex-row-reverse h-screen text-gray-300 gap-10 items-center justify-center"
    >
      <div className="flex flex-col gap-5 items-center md:max-w-lg lg:max-w-xl text-center">
        <h3 className="text-3xl font-bold border-b-4 pb-2 border-pink-500">
          Projects
        </h3>
      </div>
    </div>
  );
};

export default Projects;
