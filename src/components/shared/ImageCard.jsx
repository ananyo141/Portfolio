import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ImageCard = ({ imgpath, name, text }) => {
  return (
    <div className="block rounded-lg shadow-lg bg-white w-56">
      <div className="overflow-hidden rounded-t-lg h-28 bg-[#9d789b]"></div>
      <div className="w-24 -mt-12 overflow-hidden border-2 border-white rounded-full mx-auto bg-white">
        <img src={``} />
      </div>
      <div className="p-6">
        <h4 className="text-2xl font-semibold mb-4">{name}</h4>
        <hr />
        <p className="mt-4">
          <FaQuoteLeft className="inline float-left" />
          {text}
        </p>
        <FaQuoteRight className="float-right" />
      </div>
    </div>
  );
};

export default ImageCard;
