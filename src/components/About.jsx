import React from "react";
import facePhoto from "../assets/face.png";

const About = () => {
  return (
    <div
      name="About"
      className="flex h-screen flex-col items-center justify-center gap-4 text-gray-300 md:flex-row-reverse lg:gap-10 xl:gap-28"
    >
      <div className="flex flex-col items-center gap-5 rounded-3xl p-10 text-center shadow-xl md:max-w-lg md:items-end md:text-right lg:max-w-xl">
        <h3 className="border-b-4 border-pink-500 pb-2 text-3xl font-bold">
          About
        </h3>
        <p className="text-2xl font-bold">
          Hey, I am Ananyobrata Pal, nice to meet you! You can contact me, or
          just have a look around!
        </p>
        <p className="text-lg font-light text-gray-400">
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
      <div className="mt-5 mr-4 rounded-full bg-gray-400 p-4 md:mt-12">
        <img
          src={facePhoto}
          className="w-60 rounded-full bg-white/40 shadow-2xl shadow-black"
          alt="Image of Me"
        />
      </div>
    </div>
  );
};

export default About;
