import React from "react";

import meterlogo from "../../assets/meter1.svg";

const CircularMeter = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative">
        <img src={meterlogo} alt="circular meter" className="block w-36" />
        <div className="absolute top-0 flex w-full h-full justify-center items-center">
          <p className="text-4xl font-bold">{title}</p>
        </div>
      </div>
      <p className="text-xl">{subtitle}</p>
    </div>
  );
};

export default CircularMeter;
