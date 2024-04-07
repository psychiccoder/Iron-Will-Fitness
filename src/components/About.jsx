import React from "react";
import img from "../assets/img/00.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5">
      <div>
        <h1 className="text-5xl text-teal font-semibold text-center md:text-start mt-14 md:mt-0">
          About Us
        </h1>

        <div className=" w-full md:w-3/4 space-y-5 mt-4 text-2xl ">
          <p>
            Our proficient team comprising certified personal trainers, diligent staff,
            and seasoned management is resolutely dedicated to delivering unparalleled support
            at every juncture of your fitness journey.

          </p>
        </div>
      </div>
      <div className="h-fit w-fit">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
