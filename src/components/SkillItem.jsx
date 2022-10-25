import React from "react";

const SkillItem = ({ imgfile, proficiency }) => {
  return (
    <div className="group relative flex cursor-pointer">
      <img
        src={imgfile}
        alt="Skill Index"
        className="block rounded-full p-2 border-2 border-gray-500 object-cover w-24 h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-500 ease-in-out group-hover:bg-white h-24 w-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {proficiency}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
