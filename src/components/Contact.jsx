import React from "react";

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
      <div name="Form">
        <h2 className="text-3xl font-semibold">Get In Touch</h2>
        <form action="#" className="text-gray-300" method="POST">
          <div className="mt-8 grid grid-cols-2 gap-3">
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
