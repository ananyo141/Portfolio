import React from "react";
import * as icons from "react-icons/md";

const IconGen = ({ name, ...rest }) => {
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent {...rest} /> : null;
};

export default IconGen;
