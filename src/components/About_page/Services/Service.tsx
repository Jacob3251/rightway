import React from "react";
import image1 from "../../../assets/images/About_images/Services/men 1.png";
import image2 from "../../../assets/images/About_images/Services/two 2.png";
import image3 from "../../../assets/images/About_images/Services/one.png";
import image4 from "../../../assets/images/About_images/Services/graduate 1.png";

const Service = () => {
  return (
    <div className="max-w-[1280px] mx-auto w-full p-5">
      {/* header */}
      <div className="text-center md:w-[560px] mx-auto">
        <h1 className="text-primary text-4xl font-bold p-2">Our Services</h1>
        <p className="p-1 text-[#393939]">
          At Right Way Consultancy, we understand that choosing the right
          consultancy is crucial for your educational success. Here's why we
          stand out:
        </p>
      </div>

      {/* Expert Guidance */}
      <div className="md:relative overflow-hidden flex flex-row-reverse  w-full h-[400px] bg-[#E5E5E5] mx-auto rounded-3xl m-10 group hover:bg-[#1F3566] hover:scale-100  duration-500">
        <div className="p-10 md:w-[50%] lg:w-[70%] w-full   ">
          <h1 className="text-primary text-3xl font-bold p-2 group-hover:text-white">
            Expert Guidance
          </h1>
          <p className="p-2 group-hover:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi
            unde ipsa tempore eligendi praesentium quibusdam aliquam! Quas
            quibusdam, facere at, dolorem facilis, impedit nihil voluptas
            necessitatibus labore error minus.
          </p>
        </div>
        <div className="hidden md:block relative w-[50%]">
          <img
            src={image1}
            alt="Expert"
            className="rounded-3xl h-[400px] absolute left-0 bottom-0"
          />
        </div>
      </div>

      {/* Personalized Approach */}
      <div className="md:relative overflow-hidden flex w-full h-[400px] bg-[#E5E5E5] mx-auto rounded-3xl m-10 group hover:bg-[#1F3566] hover:scale-100  duration-500">
        <div className="p-10 md:w-[50%] lg:w-[70%] w-full   ">
          <h1 className="text-primary text-3xl font-bold p-2 group-hover:text-white">
            Personalized Approach
          </h1>
          <p className="p-2 group-hover:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi
            unde ipsa tempore eligendi praesentium quibusdam aliquam! Quas
            quibusdam, facere at, dolorem facilis, impedit nihil voluptas
            necessitatibus labore error minus.
          </p>
        </div>
        <div className="hidden md:block relative w-[50%]">
          <img
            src={image2}
            alt="Personalized Approach"
            className="rounded-3xl h-[400px] absolute right-0 bottom-0"
          />
        </div>
      </div>

      {/* Extensive Network */}
      <div className="md:relative overflow-hidden flex flex-row-reverse  w-full h-[400px] bg-[#E5E5E5] mx-auto rounded-3xl m-10 group hover:bg-[#1F3566] hover:scale-100  duration-500">
        <div className="p-10 md:w-[50%] lg:w-[70%] w-full   ">
          <h1 className="text-primary text-3xl font-bold p-2 group-hover:text-white">
            Extensive Network
          </h1>
          <p className="p-2 group-hover:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi
            unde ipsa tempore eligendi praesentium quibusdam aliquam! Quas
            quibusdam, facere at, dolorem facilis, impedit nihil voluptas
            necessitatibus labore error minus.
          </p>
        </div>
        <div className="hidden md:block relative w-[50%]">
          <img
            src={image3}
            alt="Expert"
            className="rounded-3xl h-[400px] absolute -left-5 bottom-0"
          />
        </div>
      </div>

      {/* Ongoing Support */}
      <div className="md:relative overflow-hidden flex w-full h-[400px] bg-[#E5E5E5] mx-auto rounded-3xl m-10 group hover:bg-[#1F3566] hover:scale-100  duration-500">
        <div className="p-10 md:w-[50%] lg:w-[70%] w-full   ">
          <h1 className="text-primary text-3xl font-bold p-2 group-hover:text-white">
            Ongoing Support
          </h1>
          <p className="p-2 group-hover:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi
            unde ipsa tempore eligendi praesentium quibusdam aliquam! Quas
            quibusdam, facere at, dolorem facilis, impedit nihil voluptas
            necessitatibus labore error minus.
          </p>
        </div>
        <div className="hidden md:block relative w-[50%]">
          <img
            src={image4}
            alt="Ongoing Support"
            className="rounded-3xl h-[400px] absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
