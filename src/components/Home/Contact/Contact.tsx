import React from "react";
import image from "../../../assets/images/Contact_Image/contact.png";

const Contact = () => {
  return (
    <div className="w-full md:py-[20rem] md:p-16 p-2 md:pt-10 md:pb-5 my-10  px-8">
      <div className="lg:relative max-w-[1240px] mx-auto  grid  md:grid-cols-3 bg-[#E5E5E5]  rounded-3xl px-5">
        <div className="  flex flex-col justify-center md:items-start lg:p-4 my-4 col-span-1 md:col-span-2 ">
          <h2 className="  md:px-[3rem]  text-[28px] md:text-[32px] lg:text-5xl text-center md:text-start font-bold text-[#1F3566] py-2 sm:py-3 md:py-5">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-gray-500 md:text-l font-bold md:px-[3rem] p-2 text-center md:text-left">
            Our team at Right Way Consultancy is here to help. Contact us today
            for personalized support and expert advice on your application
            process. Your dream university is within reach.
          </p>
          <div className="text-primary font-bold md:px-[3rem] md:py-4 text-center ">
            Let's Make It Happen Together!
          </div>
          <div className="pl-3 text-center ">
            <button className="bg-[#3FB549] w-[200px] md:mx-[2rem] rounded-3xl font-medium my-6  py-3 text-white">
              Apply Now
            </button>
          </div>
        </div>

        <div className=" lg:absolute md:grid md:grid-cols-1 right-0 bottom-0 hidden col-span-1">
          <img src={image} alt="" className="h-[28rem] rounded-3xl " />
        </div>
      </div>
    </div>
  );
};

export default Contact;
