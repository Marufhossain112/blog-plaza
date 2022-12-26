import React from "react";
import image from "../../../src/images/passport_pic.png";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 flex justify-around flex-wrap">
      <div className="mb-5">
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col lg:items-center ">
        <p className="text-2xl mb-1 text-justify font-bold">Maruf Hossain</p>
        <p className="about-me text-justify">
          I am Maruf Hossain. I am Junior Web Developer. I have skills on
          Javascript,React,NodeJs,MongoDB,ExpressJs,Firebase etc. I have taken
          an online course from Programming Hero on Web Development.
        </p>
      </div>
    </div>
  );
};
export default AboutUs;
