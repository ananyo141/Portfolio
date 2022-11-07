import React from "react";
import facePhoto from "../assets/face.png";

const About = () => {
  return (
    <div
      name="About"
      className="flex flex-col md:flex-row-reverse h-screen text-gray-300 gap-4 lg:gap-10 xl:gap-28 items-center justify-center"
    >
      <div className="flex flex-col gap-5 shadow-xl rounded-3xl p-10 items-center md:items-end md:max-w-lg lg:max-w-xl text-center md:text-right">
        <h3 className="text-3xl font-bold border-b-4 pb-2 border-pink-500">
          About
        </h3>
        <p className="text-2xl font-bold">
          Hey, I am Ananyobrata Pal, nice to meet you! You can contact me, or
          just have a look around!
        </p>
        <p className="font-light text-lg text-gray-400">
          I am a CSE Undergrad diving into the world of technology, interested
          in building full stack apps. An Open Source advocate obsessed with
          ArchLinux and (N)vim. I am passionate about building excellent
          software that improves the lives of those around me. I specialize in
          creating software for clients ranging from individuals and
          small-businesses all the way to large enterprise corporations. What
          would you do if you had a software expert available at your
          fingertips?
        </p>
      </div>
      <div className="bg-gray-400 rounded-full p-4 mt-5 md:mt-12 mr-4">
        <img
          src={facePhoto}
          className="w-60 bg-white/40 shadow-black shadow-2xl rounded-full"
          alt="Image of Me"
        />
      </div>
    </div>
  );
};

export default About;
