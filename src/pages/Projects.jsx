import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ProjectCard from "../components/ProjectCard";

import projectsData from "../data/ProjectsData";

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
        <div className="flex">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {projectsData.map(
              ({ title, description, image, ghlink, demolink }) => (
                <SwiperSlide>
                  <ProjectCard
                    title={title}
                    description={description}
                    image={image}
                    ghlink={ghlink}
                    demolink={demolink}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
