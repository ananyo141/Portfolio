import React from "react";

import IconCard from "./shared/IconCard";
import CircularMeter from "./shared/CircularMeter";

import ExperiencesData from "../data/ExperienceData";
import StatsData from "../data/StatsData";

const Experience = () => {
  return (
    <div
      name="Experience"
      className="flex flex-col h-screen text-gray-300 gap-24 items-center justify-center"
    >
      <h3 className="text-3xl font-bold border-b-4 pb-2 border-pink-500">
        Experience
      </h3>
      <div className="flex gap-4">
        {ExperiencesData.map((expObj) => (
          <IconCard
            icon={expObj.icon}
            title={expObj.title}
            text={expObj.text}
          />
        ))}
      </div>
      <div className="flex min-w-fit w-1/2 justify-between gap-6">
        {StatsData.map((statObj) => (
          <CircularMeter title={statObj.title} subtitle={statObj.subtitle} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
