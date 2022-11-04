import React from "react";

import IconGen from "./shared/IconGen";
import ExperiencesData from "../data/experience.json";

import Card from "./shared/Card";

const Experience = () => {
  return (
    <div
      name="Experience"
      className="flex flex-col h-screen text-gray-300 gap-10 items-center justify-center"
    >
      <h3 className="text-3xl font-bold border-b-4 pb-2 border-pink-500">
        Experience
      </h3>
      <div className="flex gap-4">
        {ExperiencesData.experience.map((expObj) => {
          return (
            <Card
              icon={<IconGen name={expObj.icon} />}
              title={expObj.title}
              text={expObj.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
