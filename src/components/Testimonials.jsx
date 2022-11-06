import React from "react";

import face from "../assets/face.png";
import ImageCard from "./shared/ImageCard";

const Testimonials = () => {
  return (
    <section
      name="Testimonials"
      className="flex flex-col justify-center items-center mb-20 text-gray-700 h-screen"
    >
      <div className="lg:w-1/2">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <h3 className="text-3xl font-bold border-b-4 pb-2 border-pink-500 text-white">
            Testimonials
          </h3>
          <p className="mb-6 pb-2 md:mb-12 md:pb-0 text-gray-300 font-light">
            Let's see what my colleagues and mentors say about me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <ImageCard
            imgpath="../../assets/face.png"
            name="Ananyo"
            text="Lorem ipsum"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
