import React from "react";
import facePhoto from "../assets/face.jpeg";

const About = () => {
  return (
    <div
      name="About"
      className="flex gap-10 h-screen justify-center items-center text-gray-400"
    >
      <img
        src={facePhoto}
        className="w-60 h-60 rounded-full"
        alt="Image of Me"
      />
      <div name="About String" className="space-y-8">
        <h3 className="text-3xl font-bold border-b-4 pb-2 text-gray-200 border-pink-500">About</h3>
        <p className="text-2xl max-w-xl text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          quaerat veniam quia, officia nulla in rem inventore laudantium,
          expedita dolorem et. Aliquid animi laborum impedit voluptatum dolorem
          recusandae fugit! Cum.
        </p>
      </div>
    </div>
  );
};

export default About;
