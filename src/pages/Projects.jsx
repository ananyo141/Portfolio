import React from "react";

import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div
      name="Projects"
      className="flex h-screen flex-col items-center justify-center gap-10 text-gray-300 md:flex-row-reverse"
    >
      <div className="flex flex-col items-center gap-5 text-center md:max-w-lg lg:max-w-xl">
        <h3 className="border-b-4 border-pink-500 pb-2 text-3xl font-bold">
          Projects
        </h3>
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
