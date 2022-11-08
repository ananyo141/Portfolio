import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ImageCard = ({ image, name, text }) => {
  return (
    <div className="block w-72 rounded-lg bg-gray-300 shadow-lg">
      <div className="h-28 overflow-hidden rounded-t-lg bg-cyan-600"></div>
      <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
        <img src={image} />
      </div>
      <div className="p-6">
        <h4 className="mb-4 text-2xl font-semibold">{name}</h4>
        <hr />
        <p className="mt-4">
          <FaQuoteLeft className="float-left inline" />
          {text}
        </p>
        <FaQuoteRight className="float-right" />
      </div>
    </div>
  );
};

export default ImageCard;
