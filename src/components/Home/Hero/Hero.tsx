import React from "react";
import image1 from "../../../assets/images/Hero_Images/image-1.png";
import image2 from "../../../assets/images/Hero_Images/image-2.png";
import image3 from "../../../assets/images/Hero_Images/image-3.png";
import image4 from "../../../assets/images/Hero_Images/image-4.png";

const Hero = () => {
  return (
    <div className="max-w-[1280px]  w-full  mx-auto text-center flex flex-col justify-center items-center p-5  lg:p-10">
      <p className="text-gray-500 font-bold p-2 pt-10 ">
        Welcome to Right Way Consultancy
      </p>
      <h1 className="text-[#1F3566] md:text-6xl sm:text-6xl text-4xl font-bold md:py-6">
        Dream. Discover. Success.
      </h1>
      <p className="md:text-3xl text-xl  pl-2 text-gray-500">
        Right Way Consultancy working with UK, USA, Canada, Australia and Europe
        Universities and helping students to choose right destination.
      </p>
      <div className="pl-3 ">
        <button className="bg-[#3FB549] w-[200px] mx-[2rem] rounded-3xl font-medium my-6  py-3 text-white">
          Start Your Journey
        </button>

        <button className=" w-[200px] rounded-3xl font-bold mb-6 mx-auto py-3 text-[#3FB549] border-2 border-[#3FB549]">
          Find Universities
        </button>
      </div>
      <div>
        <p className="text-gray-500 font-bold text-center">
          Let's Make It Happen Together!
        </p>
      </div>
      {/* images section */}
      <div className="hidden md:grid  grid-cols-4 gap-4 max-w-[800px] px-4 ">
        <div className="flex flex-col h-[280px]  ">
          <img src={image1} alt="" />
        </div>
        <div className="flex flex-col h-[280px] mt-[50px]   ">
          <img src={image2} alt="" />
        </div>
        <div className="flex flex-col h-[280px] mt-[50px]   ">
          <img src={image3} alt="" />
        </div>
        <div className="flex flex-col h-[280px]    ">
          <img src={image4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
