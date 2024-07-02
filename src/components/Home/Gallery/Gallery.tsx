import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import image1 from "../../../assets/images/Home_images/Gallery_images/USA.png";
import image2 from "../../../assets/images/Home_images/Gallery_images/Australia.png";
import image3 from "../../../assets/images/Home_images/Gallery_images/canada.png";
import image4 from "../../../assets/images/Home_images/Gallery_images/uk.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Custom CSS
import "./Gallery.css";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Australia from "../../Universities/AUSTRALIA/Australia";

const Gallery = () => {
  const swiperRef = useRef();
  return (
    <div className=" max-w-[1280px] w-full mx-auto p-10 pt-16 ">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-5 md:gap-y-0 md:gap-x-5 mb-10">
        <div className="font-bold text-center sm:text-left text-[28px] md:text-[36px] lg:text-[48px] text-primary md:col-span-2 leading-snug">
          Explore Your Global Options
        </div>
        <div className="md:col-span-3 text-[#393939] font-medium text-[18px] lg:text-[22px] text-center sm:text-left leading-tight">
          At Right Way Consultancy, we unlock academic opportunities in
          prestigious destinations worldwide. Whether you dream of bustling
          cities, picturesque landscapes, or vibrant cultural hubs, we're here
          to make it happen. With our expert guidance, turn your aspirations
          into reality in these countries:
        </div>
      </div>

      <div className="grid gap-y-5 grid-cols-1 md:grid-cols-5  w-full h-auto">
        <div className="md:col-span-1 flex justify-end md:justify-start  md:items-end space-x-2 z-10">
          <div className="flex">
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
        </div>
        <div className="md:col-span-4 ">
          <Swiper
            watchSlidesProgress={true}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-prev",
              prevEl: ".swiper-button-next",
            }}
            spaceBetween={30}
            slidesPerView={"auto"}
            className="gallery "
          >
            <SwiperSlide>
              <div className="w-full h-full relative rounded-3xl overflow-hidden bg-primary group duration-500 p-5">
                <div className="absolute  top-0 left-0 right-0 bottom-0 w-full h-full group-hover:hidden">
                  <img
                    src={image1}
                    alt=""
                    className="w-full h-full scale-150 object-cover"
                  />
                </div>

                <h3 className="absolute text-primary group-hover:text-secondary text-2xl font-bold p-2 pt-4 pb-0">
                  United States of America (USA)
                </h3>

                <div className="absolute  bottom-5 left-2 right-2 hidden group-hover:block ">
                  <span className="text-white">
                    <p className="p-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum, deleniti?
                    </p>
                    <button className="border-2 px-5 py-2 rounded-3xl">
                      Find Universities
                    </button>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full relative rounded-3xl overflow-hidden bg-primary group duration-500 p-5">
                <div className="absolute  top-0 left-0 right-0 bottom-0 w-full h-full group-hover:hidden">
                  <img
                    src={image2}
                    alt=""
                    className="w-full h-full scale-150 object-cover"
                  />
                </div>

                <h3 className="absolute text-primary group-hover:text-secondary text-2xl font-bold p-2 pt-4 pb-0">
                  Australia
                </h3>

                <div className="absolute  bottom-5 left-2 right-2 hidden group-hover:block ">
                  <span className="text-white">
                    <p className="p-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum, deleniti?
                    </p>
                    <button className="border-2 px-5 py-2 rounded-3xl">
                      Find Universities
                    </button>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full relative rounded-3xl overflow-hidden bg-primary group duration-500 p-5">
                <div className="absolute  top-0 left-0 right-0 bottom-0 w-full h-full group-hover:hidden">
                  <img
                    src={image3}
                    alt=""
                    className="w-full h-full scale-150 object-cover"
                  />
                </div>

                <h3 className="absolute text-primary group-hover:text-secondary text-2xl font-bold p-2 pt-4 pb-0">
                  Canada
                </h3>

                <div className="absolute  bottom-5 left-2 right-2 hidden group-hover:block ">
                  <span className="text-white">
                    <p className="p-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum, deleniti?
                    </p>
                    <button className="border-2 px-5 py-2 rounded-3xl">
                      Find Universities
                    </button>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full relative rounded-3xl overflow-hidden bg-primary group duration-500 p-5">
                <div className="absolute  top-0 left-0 right-0 bottom-0 w-full h-full group-hover:hidden">
                  <img
                    src={image4}
                    alt=""
                    className="w-full h-full scale-150 object-cover"
                  />
                </div>

                <h3 className="absolute text-primary group-hover:text-secondary text-2xl font-bold p-2 pt-4 pb-0">
                  United Kingdom
                </h3>

                <div className="absolute  bottom-5 left-2 right-2 hidden group-hover:block ">
                  <span className="text-white">
                    <p className="p-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum, deleniti?
                    </p>
                    <button className="border-2 px-5 py-2 rounded-3xl">
                      Find Universities
                    </button>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Navigation buttons */}
      </div>
      {/* Show Button */}
      <div className="mx-auto w-[250px] p-3 md:pt-10">
        <button className="bg-primary text-white p-2 rounded-3xl w-[100%]">
          <Link className="" to="/University" id="university">
            Universities
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
