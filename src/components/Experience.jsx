import React from "react";

import IconGen from "./shared/IconGen";
import Card from "./shared/Card";
import CircularMeter from "./shared/CircularMeter";

import ExperiencesData from "../data/experience.json";
import StatsData from "../data/stats.json";

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
        {ExperiencesData.experience.map((expObj) => (
          <Card
            icon={<IconGen name={expObj.icon} />}
            title={expObj.title}
            text={expObj.text}
          />
        ))}
      </div>
      <div className="flex min-w-fit w-1/2 justify-between gap-6">
        {StatsData.stats.map((statObj) => (
          <CircularMeter title={statObj.title} subtitle={statObj.subtitle} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
