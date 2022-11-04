import React from "react";
import { BiCrop } from "react-icons/bi";

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
      <div>
        <Card
          icon={<BiCrop />}
          title="Title"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fugit corrupti
    sit vitae cum labore voluptates quidem ducimus maiores quod cupiditate,
    fuga numquam veniam libero nisi dolor quisquam error dolores."
        />
      </div>
    </div>
  );
};

export default Experience;
