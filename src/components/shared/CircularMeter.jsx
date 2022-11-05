import React from "react";

import meterlogo from "../../assets/meter1.svg";

const CircularMeter = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={meterlogo} alt="circular meter" className="top-0 left-0" />
      <p>{subtitle}</p>
    </div>
  );
};

export default CircularMeter;
