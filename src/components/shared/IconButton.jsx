import React from "react";

const IconButton = ({ icon, text, link }) => {
  return (
    <a
      className="flex items-center gap-3"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
};

export default IconButton;
