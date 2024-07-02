import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Contact_Form = () => {
  return (
    <div className="w-full lg:py-16 max-w-[1280px] mx-auto md:flex p-10 md:space-x-20">
      {/* Left-Div */}
      <div className=" w-full">
        {/* Header Section */}
        <h1 className="text-primary text-4xl font-bold">Get In Touch</h1>
        <p className="text-[#393939] font-medium pt-4 text-lg">
          Questions? Ready to start your journey? Contact us today for
          personalized guidance and support. We're here to help you every step
          of the way.
        </p>

        <form action="" className="my-5">
          <div className="flex flex-col">
            <label htmlFor="" className="text-primary font-bold uppercase ">
              Name
            </label>
            <input
              type="text"
              name=""
              id=""
              required
              className="text-primary bg-transparent w-[100%] text-[18px] py-2 border-0 border-primary border-b-2 appearance-none  focus:outline-none focus:ring-0 focus:text-primary"
            />
          </div>

          <div className="flex space-x-10 my-5">
            <div>
              <label htmlFor="" className="text-primary font-bold uppercase">
                Email
              </label>
              <input
                type="email"
                name=""
                id=""
                required
                className="text-primary bg-transparent w-[100%] px-5 py-2 border-primary border-0 border-b-2 appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />
            </div>

            <div>
              <label htmlFor="" className="text-primary font-bold uppercase">
                Contact No
              </label>
              <input
                type="text"
                name=""
                id=""
                required
                className="text-primary bg-transparent w-[100%] px-5 py-2 border-primary border-0 border-b-2 appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:text-primary"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-primary font-bold uppercase">
              Message
            </label>{" "}
            <textarea
              name=""
              id=""
              required
              className="text-primary bg-transparent w-[100%] py-2 border-primary border-0 border-b-2 appearance-none  focus:outline-none focus:ring-0 focus:text-primary"
            />
          </div>

          {/* Submit Button */}
          <div className="mx-auto ">
            <button className=" w-[120px] flex-1 rounded-3xl font-medium  my-6  py-3 bg-[#3FB549] text-white">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Right-Div */}
      <div className="w-full">
        <div>
          <h2 className="text-primary font-bold text-xl">Visit Us</h2>
          <p className="text-[##393939] p-2">
            Find our office location and visit us in person for personalized
            assistance.
          </p>
          <p className="flex p-2 text-[##393939]">
            <IoLocationSharp className="text-[#3FB549] text-2xl" /> 123 ABC
            Road,
            <br /> Dhaka, Bangladesh
          </p>
        </div>

        <div className="pt-4">
          <h2 className="text-primary font-bold text-xl">Contact Us</h2>
          <p className="text-[##393939] p-2">
            Reach out to us via phone or email for inquiries or to schedule an
            appointment.
          </p>
          <p className="flex p-2 text-[##393939]">
            <FaPhoneAlt className="text-[#3FB549] text-2xl pr-2" />{" "}
            +88015862824645
          </p>
        </div>

        <div className="pt-4">
          <h2 className="text-primary font-bold text-xl">Connect with Us</h2>
          <p className="text-[##393939] p-2">
            Follow us on social media for updates, tips, and resources on
            studying abroad.
          </p>
          <p className="flex p-2 text-[##393939]">
            <FaFacebook className="text-[#3FB549] text-4xl pr-4" />{" "}
            <AiFillTwitterCircle className="text-[#3FB549] text-4xl pr-4" />{" "}
            <FaLinkedinIn className="text-[#3FB549] text-4xl pr-4" />
            <FaInstagramSquare className="text-[#3FB549] text-4xl pr-4" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact_Form;
