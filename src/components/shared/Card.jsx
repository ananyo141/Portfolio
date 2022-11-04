import React from "react";
import { IconContext } from "react-icons";

const Card = ({ icon, title, text }) => {
  return (
    <div className="py-10 px-20 space-y-3 max-w-lg rounded-xl shadow-xl bg-[#0d2144] transition duration-200 hover:bg-[#612608] ">
      <div className="-ml-4">
        <IconContext.Provider value={{ color: "green", size: "70px" }}>
          {icon}
        </IconContext.Provider>
      </div>
      <h4 className="font-semibold text-2xl">{title}</h4>
      <p className="text-md">{text}</p>
    </div>
  );
};

export default Card;
