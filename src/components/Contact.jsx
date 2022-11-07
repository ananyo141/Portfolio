import React from "react";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

import astranautImg from "../assets/astronaut.svg";

const PaddedInputField = ({ name, type, placeholder }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="border p-5 rounded-xl bg-white/10"
    />
  );
};

const Contact = () => {
  return (
    <div
      name="Contact"
      className="flex flex-col md:flex-row justify-center items-center overflow-hidden gap-4 md:gap-12 xl:gap-32 h-full md:h-screen text-gray-300"
    >
      <img
        src={astranautImg}
        className="max-w-xs lg:max-w-md xl:max-w-xl"
        alt="Astranaut in space"
      />
      <div className="space-y-5">
        <div className="flex text-xl gap-4">
          <p>Follow me on</p>
          <BsFacebook />
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
          <p className="text-center font-semibold mx-4 mb-0">Or</p>
        </div>
        <h2 className="text-3xl font-semibold">Send me a hello!</h2>
        <form action="#" className="text-gray-300" method="POST">
          <div className="grid grid-cols-2 gap-3">
            <PaddedInputField
              name="firstname"
              type="text"
              placeholder="First Name"
            />
            <PaddedInputField
              name="lastname"
              type="text"
              placeholder="Last Name"
            />
            <PaddedInputField
              name="email"
              type="email"
              placeholder="Email Address"
            />
            <PaddedInputField
              name="phone"
              type="tel"
              placeholder="Phone Number"
            />
            <textarea
              name="contact-message"
              placeholder="You message here..."
              className="border p-5 rounded-xl bg-white/10 col-span-2 h-60"
            ></textarea>
            <button
              className="rounded-2xl border p-4 font-semibold text-white bg-pink-600"
              value="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
