import React from "react";

const IconButton = ({ icon, text, link }) => {
  return (
    <div className="flex gap-2">
      <a className="block" href={link} target="_blank" rel="noreferrer">
        {icon}
      </a>
      <span>{text}</span>
    </div>
  );
};

export default IconButton;
