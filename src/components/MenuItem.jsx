import React from "react";

const MenuItem = () => {
  return (
    <li className="mb-5 flex cursor-pointer items-center space-x-6">
      <span className="h-[45px] w-[45px] rounded-full border-2 border-blue-300"></span>
      <span className="h-8 flex-1 rounded-lg border-2 border-blue-400"></span>
    </li>
  );
};

export default MenuItem;
