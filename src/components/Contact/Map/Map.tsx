import React from "react";
import image1 from "../../../assets/images/Contact_Page_Images/Map_image/Map.png";

const Map = () => {
  return (
    <div className="max-w-[1280px] mx-auto w-full p-10 ">
      <img src={image1} alt="Map" className="w-full h-full rounded-3xl " />

      <div className="w-full flex justify-center items-center">
        <button className=" w-[150px]  rounded-3xl font-medium  my-6  py-3 bg-[#3FB549] text-white">
          Google Map
        </button>
      </div>
    </div>
  );
};

export default Map;
