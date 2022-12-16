// https://www.youtube.com/watch?v=qppZVzJB8oA

import React from "react";
import MenuItem from "./MenuItem";

const Navsidebar = () => {
  return (
    <ul className="fixed top-[100px] w-[260px] p-5">
      {[...Array(5)].map((_, i) => (
        <MenuItem key={i} />
      ))}
    </ul>
  );
};

export default Navsidebar;
