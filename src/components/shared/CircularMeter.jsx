import React from "react";

import meterlogo from "../../assets/meter1.svg";

const CircularMeter = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative">
        <img src={meterlogo} alt="circular meter" className="block w-36" />
        <div className="absolute top-0 flex h-full w-full items-center justify-center">
          <p className="text-4xl font-bold">{title}</p>
        </div>
      </div>
      <p className="text-xl font-light">{subtitle}</p>
    </div>
  );
};

export default CircularMeter;
