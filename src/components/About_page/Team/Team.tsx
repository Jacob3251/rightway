import React from "react";
import image1 from "../../../assets/images/About_images/Team/image-1.png";
import image2 from "../../../assets/images/About_images/Team/image-2.png";
import image3 from "../../../assets/images/About_images/Team/image-3.png";
import image4 from "../../../assets/images/About_images/Team/image-4.png";
import image5 from "../../../assets/images/About_images/Team/image-5.png";
import image6 from "../../../assets/images/About_images/Team/image-6.png";
import image7 from "../../../assets/images/About_images/Team/image-7.png";
import image8 from "../../../assets/images/About_images/Team/image-1.png";
import image9 from "../../../assets/images/About_images/Team/image-2.png";
import image10 from "../../../assets/images/About_images/Team/image-3.png";
import image11 from "../../../assets/images/About_images/Team/image-4.png";
import image12 from "../../../assets/images/About_images/Team/image-5.png";

const Team = () => {
  return (
    <div className="p-5 max-w-[1280px] mx-auto">
      {/* header */}
      <div className="grid grid-cols-1 md:grid-cols-4 p-2 gap-x-5 mb-5">
        <h1 className="text-4xl text-primary font-bold pl-5 w-full md:col-span-1">
          Connect with The Team
        </h1>

        <p className=" text-[#393939] w-full col-span-3">
          Our passionate experts are dedicated to guiding you on your study
          abroad journey. With personalized support and unwavering commitment,
          we'll help you achieve your academic goals. Get to know us and let's
          make your dreams a reality.
        </p>
      </div>

      {/* Team */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center gap-4 md:p-2 pt-10">
        <div className="w-full h-full">
          <img src={image1} className="w-full h-[80%]" alt="" />
          <h3 className="text-primary text-2xl font-bold p-2">Farhan Ahmed</h3>
          <p className="p-2 pt-0">Executive</p>
        </div>
        <div className="w-full h-full">
          <img src={image2} className="w-full h-[80%]" alt="" />
          <h3 className="text-primary text-2xl font-bold p-2">Farhan Ahmed</h3>
          <p className="p-2 pt-0">Executive</p>
        </div>
        <div className="w-full h-full">
          <img src={image3} className="w-full h-[80%]" alt="" />
          <h3 className="text-primary text-2xl font-bold p-2">Farhan Ahmed</h3>
          <p className="p-2 pt-0">Executive</p>
        </div>
        <div className="w-full h-full">
          <img src={image4} className="w-full h-[80%]" alt="" />
          <h3 className="text-primary text-2xl font-bold p-2">Farhan Ahmed</h3>
          <p className="p-2 pt-0">Executive</p>
        </div>
        <div className="w-full h-full">
          <img src={image5} className="w-full h-[80%]" alt="" />
          <h3 className="text-primary text-2xl font-bold p-2">Farhan Ahmed</h3>
          <p className="p-2 pt-0">Executive</p>
        </div>
        <div className="w-full h-full">
          <img src={image6} className="w-full h-[80%]" alt="" />
          <h3 className="text-primary text-2xl font-bold p-2">Farhan Ahmed</h3>
          <p className="p-2 pt-0">Executive</p>
        </div>
        <div className="w-full h-full">
          <img src={image7} className="w-full h-[80%]" alt="" />
          <h3 className="text-primary text-2xl font-bold p-2">Farhan Ahmed</h3>
          <p className="p-2 pt-0">Executive</p>
        </div>
        <div className="w-full h-full">
          <img src={image8} className="w-full h-[80%]" alt="" />
          <h3 className="text-primary text-2xl font-bold p-2">Farhan Ahmed</h3>
          <p className="p-2 pt-0">Executive</p>
        </div>
        <div className="w-full h-full">
          <img src={image9} className="w-full h-[80%]" alt="" />
          <h3 className="text-primary text-2xl font-bold p-2">Farhan Ahmed</h3>
          <p className="p-2 pt-0">Executive</p>
        </div>
        <div className="w-full h-full">
          <img src={image10} className="w-full h-[80%]" alt="" />
          <h3 className="text-primary text-2xl font-bold p-2">Farhan Ahmed</h3>
          <p className="p-2 pt-0">Executive</p>
        </div>
        <div className="w-full h-full">
          <img src={image11} className="w-full h-[80%]" alt="" />
          <h3 className="text-primary text-2xl font-bold p-2">Farhan Ahmed</h3>
          <p className="p-2 pt-0">Executive</p>
        </div>
        <div className="w-full h-full">
          <img src={image12} className="w-full h-[80%]" alt="" />
          <h3 className="text-primary text-2xl font-bold p-2">Farhan Ahmed</h3>
          <p className="p-2 pt-0">Executive</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
