import React from "react";

import SkillItem from "./SkillItem";

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

const Skills = () => {
  return (
    <div
      name="Skills"
      className="flex flex-col space-y-8 justify-center items-center h-screen text-gray-300"
    >
      <h3 className="text-3xl font-bold border-b-4 pb-2 border-pink-500">
        Skills
      </h3>
      <h4 className="uppercase">Hover over a skill to view proficiency</h4>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 shadow-xl p-8 justify-center">
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
