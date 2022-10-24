import React from "react";
import facePhoto from "../assets/face.jpeg";

const About = () => {
  return (
    <div
      name="About"
      className="flex flex-col gap-8 h-screen justify-center items-center text-gray-400"
    >
      <div name="About String" className="grid grid-cols-2 gap-4">
        <h3 className="text-3xl font-bold border-b-4 pb-2 text-gray-200 border-pink-500">
          About
        </h3>
        <div></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <p className="text-2xl max-w-lg font-bold text-gray-200 text-right">
          Hey, I am Ananyobrata Pal, nice to meet you! You can contact me, or
          just have a look around!
        </p>
        <p className="max-w-lg text-gray-300">
          I am a CSE Undergrad diving into the world of technology, interested
          in building full stack apps. An Open Source advocate obsessed with
          ArchLinux and (N)vim. I am passionate about building excellent
          software that improves the lives of those around me.
        </p>
      </div>
      <img
        src={facePhoto}
        className="w-60 h-60 rounded-full block outline outline-offset-8"
        alt="Image of Me"
      />
    </div>
  );
};

export default About;
