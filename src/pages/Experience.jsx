import React from "react";

import IconCard from "../components/IconCard";
import CircularMeter from "../components/CircularMeter";

import ExperiencesData from "../data/ExperienceData";
import StatsData from "../data/StatsData";

const Experience = () => {
  return (
    <div
      name="Experience"
      className="flex h-screen flex-col items-center justify-center gap-24 text-gray-300"
    >
      <h3 className="border-b-4 border-pink-500 pb-2 text-3xl font-bold">
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
      <div className="flex w-1/2 min-w-fit justify-between gap-6">
        {StatsData.map((statObj) => (
          <CircularMeter title={statObj.title} subtitle={statObj.subtitle} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
