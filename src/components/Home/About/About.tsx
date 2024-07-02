import React from "react";
import image1 from "../../../assets/images/Home_images/About_images/men 2.png";
import image2 from "../../../assets/images/Home_images/About_images/two 2.png";
import image3 from "../../../assets/images/Home_images/About_images/one 1.png";
import image4 from "../../../assets/images/Home_images/About_images/graduate 1.png";

const About = () => {
  return (
    <div className="w-full ">
      <div className="w-full max-w-[1240px] mx-auto ">
        <div className=" w-full   ">
          {/* text div */}
          <div className=" lg:hidden w-full ">
            <div className=" w-full flex flex-col lg:justify-start lg:items-start justify-center items-center text-center lg:text-left px-8 lg:px-0 mt-20 lg:mt-0">
              <div className="text-[#1F3566] font-bold lg:text-[3rem] text-[32px] leading-[38px] leading-normal">
                Why Choose Right Way?
              </div>
              <div className="text-[#393939]">
                Let us guide you towards a brighter future filled with academic
                achievement and personal growth.
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="">
            <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-16 md:gap-x-10 place-content-center lg:flex lg:flex-wrap lg:justify-center lg:items-start p-10 md:p-20 lg:p-5">
              <div className="overflow-hidden relative group w-full h-full lg:w-[420px]  lg:h-[520px]  shadow-xl flex flex-col lg:p-4 lg:m-4 bg-[#E5E5E5] rounded-3xl  hover:bg-[#1F3566] hover:scale-105 duration-500 ">
                <h2 className="group-hover:text-white px-[3rem] text-2xl font-bold text-[#1F3566] py-8">
                  Expert Guidance
                </h2>
                <p className="group-hover:text-white text-gray-500 text-l font-bold px-[3rem]">
                  Our team of experienced consultants will help you navigate the
                  complex process of studying abroad, ensuring you make informed
                  decisions every step of the way.
                </p>

                <div className="absolute  md:bottom-0 bottom-[-22px]   md:right-0 right-[-21px] h-[20.1rem] w-[19rem]">
                  <img
                    src={image1}
                    alt=""
                    className="rounded-3xl md:h-[322px] h-[300px] "
                  />
                </div>

                <button className="bg-[#3FB549] z-[10] w-[200px] md:mx-10 mt-[12rem] rounded-3xl font-medium  my-6 mx-auto py-3 text-white">
                  Learn More
                </button>
              </div>
              <div className="hidden lg:block h-[250px] lg:w-[420px] ">
                <div className=" w-full flex flex-col lg:justify-start lg:items-start justify-center items-center text-center lg:text-left px-8 lg:px-0 mt-20 lg:mt-0">
                  <div className="text-[#1F3566] font-bold lg:text-[3rem] text-[32px] leading-normal">
                    Why Choose Right Way?
                  </div>
                  <div className="text-[#393939]">
                    Let us guide you towards a brighter future filled with
                    academic achievement and personal growth.
                  </div>
                </div>
              </div>
              <div className="overflow-hidden relative  w-full h-full lg:w-[420px] lg:ml-[50px]  lg:h-[520px]   shadow-xl flex flex-col lg:p-4 lg:m-4  bg-[#E5E5E5] rounded-3xl group hover:bg-[#1F3566] hover:scale-105 duration-500">
                <h2 className="group-hover:text-white px-[3rem] text-2xl font-bold text-[#1F3566] py-8">
                  Personalized Approach
                </h2>
                <p className="group-hover:text-white text-gray-500 text-l font-bold px-[3rem]">
                  We understand that every student is unique. That's why we
                  tailor our services to meet your individual needs and
                  aspirations, offering personalized support from start to
                  finish.
                </p>

                <div className="absolute  inset-x-0 bottom-0 h-[18.3rem]  ">
                  <img src={image2} alt="" className="rounded-3xl h-[300px]" />
                </div>

                <button className="bg-[#3FB549] z-[10] w-[200px] md:mx-10 mt-[12rem] rounded-3xl font-medium  my-6 mx-auto py-3 text-white">
                  Learn More
                </button>
              </div>

              <div className="overflow-hidden relative w-full h-full lg:w-[420px]  lg:h-[520px] lg:-mt-[340px] shadow-xl flex flex-col lg:p-4 lg:m-4   bg-[#E5E5E5] group   hover:bg-[#1F3566] rounded-3xl hover:scale-105 duration-500 cursor-pointer">
                <h2 className="group-hover:text-white px-[3rem] text-2xl font-bold  text-[#1F3566]   py-8">
                  Extensive Network
                </h2>
                <p className="group-hover:text-white text-gray-500 text-l font-bold px-[3rem]">
                  Partnered with renowned universities across the globe, we
                  provide access to top-tier institutions and exclusive
                  opportunities for academic advancement.
                </p>

                <div className="absolute  bottom-[-64px] right-0 h-[24rem]  ">
                  <img
                    src={image3}
                    alt=""
                    className="rounded-3xl md:h-[20rem] "
                  />
                </div>

                <button className="bg-[#3FB549] z-[10] w-[200px] md:mx-10 mt-[12rem] rounded-3xl font-medium  my-6 mx-auto py-3 text-white">
                  Learn More
                </button>
              </div>
              <div className="overflow-hidden relative lg:-mt-[340px] lg:ml-[530px] w-full h-full lg:w-[420px]  lg:h-[520px]  shadow-xl flex flex-col lg:p-4 lg:m-4 bg-[#E5E5E5] group hover:bg-[#1F3566] rounded-3xl hover:scale-105 duration-500">
                <h2 className="group-hover:text-white px-[3rem] text-2xl font-bold text-[#1F3566] py-8">
                  Ongoing Support
                </h2>
                <p className="group-hover:text-white text-gray-500 text-l font-bold px-[3rem]">
                  Your journey doesn't end once you reach your destination.
                  We're here to provide continuous support and guidance,
                  ensuring a smooth transition and successful experience abroad.
                </p>

                <div className="absolute  inset-x-0 bottom-[-31px]  h-[18.92rem]  ">
                  <img src={image4} alt="" className="rounded-3xl h-[17rem]" />
                </div>

                <button className="bg-[#3FB549] w-[200px] z-[10] md:mx-10 mt-[12rem] rounded-3xl font-medium  my-6 mx-auto py-3 text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
