import React from "react";

import ImageCard from "./shared/ImageCard";

import TestmonialsData from "../data/TestmonialsData";

const Testimonials = () => {
  return (
    <section
      name="Testimonials"
      className="flex flex-col justify-center items-center mb-20 text-gray-700 h-screen"
    >
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <h3 className="text-3xl font-bold border-b-4 pb-2 border-pink-500 text-white">
          Testimonials
        </h3>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0 text-gray-300 font-light">
          Let's see what my colleagues and mentors say about me
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center text-center">
        {TestmonialsData.map((testmObj) => (
          <ImageCard
            image={testmObj.image}
            name={testmObj.name}
            text={testmObj.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
