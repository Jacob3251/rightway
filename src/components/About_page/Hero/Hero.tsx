import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero bg-no-repeat md:max-w-[1280px] w-full mx-auto  rounded-b-3xl">
      <div className="md:py-[15%] md:w-[600px] mx-auto py-[50%] ">
        <h1 className="text-center font-bold md:text-5xl text-2xl text-white md:p-4">
          Welcome to <br /> Right Way Consultancy
        </h1>
        <p className="text-center text-[#FFFFFF] p-3">
          Your trusted partner in shaping academic futures and realizing study
          abroad dreams.
        </p>
      </div>
    </div>
  );
};

export default Hero;
