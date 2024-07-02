import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../assets/images/Home_images/Testimonial_images/image-1.png";
import image2 from "../../../assets/images/Home_images/Testimonial_images/image-2.png";
import image3 from "../../../assets/images/Home_images/Testimonial_images/image-3.png";
import image4 from "../../../assets/images/Home_images/Testimonial_images/image-4.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// custom css file
import "./Testimonial.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className=" w-full  md:pb-0 py-2 max-w-[1440px] ">
      <div className="mb-5">
        <h1 className="text-center font-bold text-[28px] sm:text-[32px] md:text-[48px] lg:text-[54px] lg:py-3 text-primary">
          Voices of Success
        </h1>
        <p className="p-5 md:p-3 text-center w-[80%] md:w-[600px] lg:w-[800px] mx-auto text-gray-600 text-[18px] md:text-[22px]">
          Discover the stories behind our students' achievements. From securing
          admission to prestigious universities to thriving in new academic
          environments, our satisfied clients share their experiences of success
          and transformation.
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto w-full flex justify-center px-5">
        <div className="container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: -5,
              depth: 120,
              modifier: 2.5,
            }}
            // pagination={{ el: ".swiper-pagination", clickable: true }}
            // navigation={{
            //   nextEl: ".swiper-button-next",
            //   prevEl: ".swiper-button-prev",
            //   hideOnClick: true,
            // }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={image1} alt="" className="rounded-3xl" />
              <div className="div-1 font-bold text-primary text-[24px]">
                Ayesha Islam
              </div>
              <div className="absolute top-0 bottom-0 right-0 left-0 w-[15rem] h-[23rem] sm:w-[20rem] sm:h-[25rem] md:w-[20rem] md:h-[25rem] rounded-3xl flex  bg-primary bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-white p-5 text-center">
                  <h1 className="font-bold p-2 text-xl ">Ayesha Islam</h1>
                  <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, deleniti?
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <img src={image2} alt="" className="rounded-3xl  " />
              <div className="div-1 font-bold text-primary text-[24px]">
                Tasnim Khan
              </div>
              <div className="absolute top-0 left-0 w-[15rem] h-[23rem] sm:w-[20rem] sm:h-[25rem] md:w-[20rem] md:h-[25rem] rounded-3xl flex  bg-primary bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-white p-5 text-center">
                  <h1 className="font-bold p-2 text-xl ">Tasnim Khan</h1>
                  <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, deleniti?
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} alt="" className="rounded-3xl " />
              <div className="div-1 font-bold text-primary text-[24px]">
                Nabil Ahmed
              </div>
              <div className="absolute top-0 left-0 w-[15rem] h-[23rem] sm:w-[20rem] sm:h-[25rem] md:w-[20rem] md:h-[25rem] rounded-3xl flex  bg-primary bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-white p-5 text-center">
                  <h1 className="font-bold p-2 text-xl ">Nabil Ahmed</h1>
                  <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, deleniti?
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image4} alt="" className="rounded-3xl  " />
              <div className="div-1 font-bold text-primary text-[24px]">
                Sarah Rahman
              </div>
              <div className="absolute top-0 left-0 w-[15rem] h-[23rem] sm:w-[20rem] sm:h-[25rem] md:w-[20rem] md:h-[25rem] rounded-3xl flex  bg-primary bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-white p-5 text-center">
                  <h1 className="font-bold p-2 text-xl ">Sarah Rahman</h1>
                  <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, deleniti?
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} alt="" className="rounded-3xl  " />
              <div className="div-1 font-bold text-primary text-[24px]">
                Tasnim Khan
              </div>
              <div className="absolute top-0 left-0 w-[15rem] h-[23rem] sm:w-[20rem] sm:h-[25rem] md:w-[20rem] md:h-[25rem] rounded-3xl flex  bg-primary bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-white p-5 text-center">
                  <h1 className="font-bold p-2 text-xl ">Tasnim Khan</h1>
                  <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, deleniti?
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} alt="" className="rounded-3xl " />
              <div className="div-1 font-bold text-primary text-[24px]">
                Nabil Ahmed
              </div>
              <div className="absolute top-0 left-0 w-[15rem] h-[23rem] sm:w-[20rem] sm:h-[25rem] md:w-[20rem] md:h-[25rem] rounded-3xl flex  bg-primary bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="text-white p-5">
                  <h1 className="font-bold p-2 text-xl text-center">
                    Nabil Ahmed
                  </h1>
                  <p className="p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum, deleniti?
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* pagination buttons */}
            <div className="slider_controller">
              {/* <div className="swiper-button-prev slider-arrow">
            <FaArrowLeft />
          </div> */}

              {/* <div className="swiper-button-next slider-arrow">
            <FaArrowRight />
          </div> */}
              {/* <div className="sm:swiper-pagination lg:hidden"></div> */}
            </div>
          </Swiper>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-[#3FB549] w-[200px] md:mx-[2rem] rounded-3xl font-medium my-6  py-3 text-white">
          Read More Stories
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
