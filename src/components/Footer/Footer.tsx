import React from "react";
import Logo from "../../assets/images/Logo_images/Logo-2.png";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-primary rounded-t-3xl lg:pl-12 max-w-full mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-3 place-content-center lg:place-content-start gap-8 text-gray-300">
      <div className="p-2  col-span-1">
        <img src={Logo} alt="" />
        <p className="py-4 text-secondary mt-6">
          Right Way Consultancy working with UK, USA, Canada, Australia and
          Europe Universities and helping students to choose right destination.
        </p>
        <div className="flex space-x-2 md:w-[75%] my-6 ">
          <a href="">
            <RiFacebookCircleLine className="text-4xl aspect-square hover:text-[#3FB549] " />
          </a>
          <a href="">
            <TiSocialTwitterCircular className="text-4xl aspect-square hover:text-[#3FB549] " />
          </a>
          <a href="">
            <FaInstagram className="text-4xl aspect-square hover:text-[#3FB549] " />
          </a>
          <a href="">
            <TiSocialLinkedinCircular className="text-4xl aspect-square hover:text-[#3FB549] " />
          </a>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-2 flex flex-col lg:flex-row justify-between lg:justify-start  lg:pl-10 ">
        <div>
          <h6 className="font-bold text-white">Quick Links</h6>
          <ul className="py-5">
            <li className="py-2 text-sm text-secondary">Home</li>
            <li className="py-2 text-sm text-secondary">About</li>
            <li className="py-2 text-sm text-secondary">Services</li>
            <li className="py-2 text-sm text-secondary">Universities</li>
            <li className="py-2 text-sm text-secondary">Resources</li>
          </ul>
        </div>

        <div className="lg:pl-[10rem]">
          <h6 className="font-bold text-white">Contact Us</h6>
          <ul className="py-5">
            <li className="py-2 text-sm text-secondary flex space-x-2">
              <FaLocationDot className="text-2xl text-[#3FB549] " />
              <div>123 ABC Road, Dhaka, Bangladesh</div>
            </li>
            <li className="py-2 text-sm text-secondary flex space-x-2">
              <FaPhoneAlt className="text-2xl text-[#3FB549] " />
              <div>+88015862824645</div>
            </li>
            <li className="py-2 text-sm text-secondary flex space-x-2">
              <TbMailFilled className="text-2xl text-[#3FB549] " />
              <div>rightway@gmail.com</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
