import React from "react";

import SkillItem from "../components/SkillItem";

import csslogo from "../assets/css.png";
import awslogo from "../assets/aws.png";
import firebaselogo from "../assets/firebase.png";
import githublogo from "../assets/github.png";
import htmllogo from "../assets/html.png";
import jslogo from "../assets/javascript.png";
import mongologo from "../assets/mongo.png";
import nodelogo from "../assets/node.png";
import reactlogo from "../assets/react.png";
import tailwindlogo from "../assets/tailwind.png";

// TODO: Load image files and proficiency data from json datafile

const Skills = () => {
  return (
    <div
      name="Skills"
      className="flex h-screen flex-col items-center justify-center space-y-8 text-gray-300"
    >
      <h3 className="border-b-4 border-pink-500 pb-2 text-3xl font-bold">
        Skills
      </h3>
      <h4 className="uppercase">Hover over a skill to view proficiency</h4>
      <div className="grid grid-cols-2 justify-center gap-6 p-8 shadow-xl sm:grid-cols-4">
        <SkillItem imgfile={htmllogo} proficiency={97} />
        <SkillItem imgfile={csslogo} proficiency={91} />
        <SkillItem imgfile={jslogo} proficiency={93} />
        <SkillItem imgfile={nodelogo} proficiency={92} />
        <SkillItem imgfile={mongologo} proficiency={89} />
        <SkillItem imgfile={reactlogo} proficiency={90} />
        <SkillItem imgfile={tailwindlogo} proficiency={95} />
        <SkillItem imgfile={githublogo} proficiency={97} />
        <SkillItem imgfile={firebaselogo} proficiency={86} />
        <SkillItem imgfile={awslogo} proficiency={79} />
      </div>
    </div>
  );
};

export default Skills;
