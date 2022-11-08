import React from "react";
import { IconContext } from "react-icons";

const Card = ({ icon, title, text }) => {
  return (
    <div className="max-w-lg space-y-3 rounded-xl bg-[#0d2144] py-10 px-20 shadow-xl transition duration-200 hover:scale-105 hover:bg-[#7a3a02]">
      <div className="-ml-2">
        <IconContext.Provider value={{ color: "green", size: "70px" }}>
          {icon}
        </IconContext.Provider>
      </div>
      <h4 className="text-2xl font-semibold">{title}</h4>
      <p className="text-md">{text}</p>
    </div>
  );
};

export default Card;
