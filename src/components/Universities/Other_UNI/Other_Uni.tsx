import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import image1 from "../../../assets/images/Universities_Images/Other_UNI/image-1.png";
import image2 from "../../../assets/images/Universities_Images/Other_UNI/image-2.png";
import image3 from "../../../assets/images/Universities_Images/Other_UNI/image-3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Custom CSS
import "./Other_Uni.css";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const Other_Uni = () => {
  const swiperRef = useRef();
  return (
    <div className="max-w-[1280px] w-full p-10 pt-16 mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-center  items-center md:items-start">
        <h1 className="md:flex-1 font-bold text-3xl text-primary pl-8 text-center md:text-left mb-5">
          Other Universities
        </h1>
        <p className="w-full md:w-[75%] text-[#393939] font-medium text-xl text-center md:text-left mb-5">
          Discover a dynamic and multicultural society offering top-notch
          education, vibrant cities, and unforgettable outdoor adventures.
        </p>
      </div>

      <div className="w-full flex flex-col">
        <div className="flex  justify-end mb-5">
          <button
            className=" text-[#3FB549] hover:bg-[#3FB549] hover:text-secondary bg-transparent rounded-full w-[40px] h-[40px] flex justify-center items-center text-[36px] "
            onClick={() => swiperRef.current.slidePrev()}
          >
            <IoArrowBackCircleOutline />
          </button>
          <button
            className="text-[#3FB549] hover:bg-[#3FB549] hover:text-secondary bg-transparent rounded-full w-[40px] h-[40px] flex justify-center items-center text-[36px] "
            onClick={() => swiperRef.current.slideNext()}
          >
            <IoArrowForwardCircleOutline />
          </button>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          // centeredSlides={true}
          watchSlidesProgress={true}
          slidesPerView={"auto"}
          loop={true}
          spaceBetween={30}
          className="usa-swiper w-full"
        >
          <SwiperSlide>
            <div className="h-full w-full bg-[#E0E1E9] flex flex-col justify-center items-center rounded-3xl">
              <div className="w-full min-w-[280px] max-w-[520px] aspect-square bg-blue-500 overflow-hidden rounded-3xl">
                <img
                  src={image1}
                  alt=""
                  className="w-full h-full scale-150  "
                />
              </div>

              <h3 className="text-primary text-2xl font-bold p-2 mt-2">
                Horizon University
              </h3>
              <p className="p-2">New Haven, Connecticut, USA</p>
              <p className="p-2 pb-0">
                With a diverse range of programs, state-of-the-art facilities,
                and a supportive community, Horizon University provides students
                with the tools they need to succeed in their academic and
                professional endeavors.
              </p>
              <div className=" flex">
                <button className="bg-[#3FB549] w-[120px] flex-1  rounded-3xl mx-2 font-medium  my-6 py-3 text-white">
                  Learn More
                </button>
                <button className="bg-transparent w-[120px] flex-1 rounded-3xl font-medium  my-6  py-3 border-2 border-primary text-primary">
                  Apply Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-[#E0E1E9] flex flex-col justify-center items-center rounded-3xl">
              <div className="w-full min-w-[280px] max-w-[520px] aspect-square bg-blue-500 overflow-hidden rounded-3xl">
                <img
                  src={image2}
                  alt=""
                  className="w-full h-full scale-150  "
                />
              </div>

              <h3 className="text-primary text-2xl font-bold p-2 mt-2">
                Horizon University
              </h3>
              <p className="p-2">New Haven, Connecticut, USA</p>
              <p className="p-2 pb-0">
                With a diverse range of programs, state-of-the-art facilities,
                and a supportive community, Horizon University provides students
                with the tools they need to succeed in their academic and
                professional endeavors.
              </p>
              <div className=" flex">
                <button className="bg-[#3FB549] w-[120px] flex-1  rounded-3xl mx-2 font-medium  my-6 py-3 text-white">
                  Learn More
                </button>
                <button className="bg-transparent w-[120px] flex-1 rounded-3xl font-medium  my-6  py-3 border-2 border-primary text-primary">
                  Apply Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-[#E0E1E9] flex flex-col justify-center items-center rounded-3xl">
              <div className="w-full min-w-[280px] max-w-[520px] aspect-square bg-blue-500 overflow-hidden rounded-3xl">
                <img
                  src={image3}
                  alt=""
                  className="w-full h-full scale-150  "
                />
              </div>

              <h3 className="text-primary text-2xl font-bold p-2 mt-2">
                Horizon University
              </h3>
              <p className="p-2">New Haven, Connecticut, USA</p>
              <p className="p-2 pb-0">
                With a diverse range of programs, state-of-the-art facilities,
                and a supportive community, Horizon University provides students
                with the tools they need to succeed in their academic and
                professional endeavors.
              </p>
              <div className=" flex">
                <button className="bg-[#3FB549] w-[120px] flex-1  rounded-3xl mx-2 font-medium  my-6 py-3 text-white">
                  Learn More
                </button>
                <button className="bg-transparent w-[120px] flex-1 rounded-3xl font-medium  my-6  py-3 border-2 border-primary text-primary">
                  Apply Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full bg-[#E0E1E9] flex flex-col justify-center items-center rounded-3xl">
              <div className="w-full min-w-[280px] max-w-[520px] aspect-square bg-blue-500 overflow-hidden rounded-3xl">
                <img
                  src={image1}
                  alt=""
                  className="w-full h-full scale-150  "
                />
              </div>

              <h3 className="text-primary text-2xl font-bold p-2 mt-2">
                Horizon University
              </h3>
              <p className="p-2">New Haven, Connecticut, USA</p>
              <p className="p-2 pb-0">
                With a diverse range of programs, state-of-the-art facilities,
                and a supportive community, Horizon University provides students
                with the tools they need to succeed in their academic and
                professional endeavors.
              </p>
              <div className=" flex">
                <button className="bg-[#3FB549] w-[120px] flex-1  rounded-3xl mx-2 font-medium  my-6 py-3 text-white">
                  Learn More
                </button>
                <button className="bg-transparent w-[120px] flex-1 rounded-3xl font-medium  my-6  py-3 border-2 border-primary text-primary">
                  Apply Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation buttons */}
        {/* <div className="absolute top-6 right-4 flex space-x-2 z-10">
          <div>
            <IoArrowBackCircleOutline className="swiper-button-prev  cursor-pointer text-3xl text-[#3FB549]   rounded-full" />
          </div>
          <div className=" ">
            <IoArrowForwardCircleOutline className="swiper-button-next cursor-pointer text-3xl text-[#3FB549] rounded-full" />
          </div>
        </div> */}
      </div>

      {/* Show Button */}
      <div className="mx-auto w-[150px] p-3 md:pt-10">
        <button className="bg-primary text-white p-2 rounded-3xl w-[100%]">
          Show All
        </button>
      </div>
    </div>
  );
};

export default Other_Uni;
