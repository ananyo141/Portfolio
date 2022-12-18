import React from "react";

import ProjectCard from "../components/ProjectCard";

import projectsData from "../data/ProjectsData";

const Projects = () => {
  return (
    <div
      name="Projects"
      className="flex h-fit flex-col items-center justify-center gap-10 text-gray-300 sm:h-screen md:flex-row-reverse"
    >
      <div className="flex flex-col items-center gap-5 text-center md:max-w-lg lg:max-w-xl">
        <h3 className="border-b-4 border-pink-500 pb-2 text-3xl font-bold">
          Projects
        </h3>
        <div className="flex w-screen flex-wrap justify-center gap-4">
          {projectsData.map(
            ({ title, description, image, ghlink, demolink }) => (
              <ProjectCard
                title={title}
                description={description}
                image={image}
                ghlink={ghlink}
                demolink={demolink}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
